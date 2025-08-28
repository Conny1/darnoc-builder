"use client";
import { Canva, Sidebar } from "@/components";
import React, { useEffect, useState } from "react";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { BlockType, Droppableids } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  addBlock,
  addInlineBlock,
  updateInlineSortedBlocks,
  updateSortedBlocks,
} from "@/redux/emailTemplateSlice";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

const Dashboard = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 1024); // 1024px = Tailwind lg breakpoint
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);


  const dropableData = useSelector(
    (state: RootState) => state.email.dropableData
  );
  const dispatch = useDispatch();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  function handleSortEvent(event: DragEndEvent) {
    const { active, over } = event;
    if (active.id !== over?.id) {

      if (!active?.data.current?.parent_id) {
        const oldIndex = dropableData.findIndex(
          (item) => item.id === active.id
        );
        const newIndex = dropableData.findIndex((item) => item.id === over?.id);
        return dispatch(
          updateSortedBlocks(arrayMove(dropableData, oldIndex, newIndex))
        );
      }
      if (active.data.current?.parent_id) {
        const id = active.data.current?.parent_id;
        const over_id = over?.id as string;
        const active_id = active.id as string;
        dispatch(
          updateInlineSortedBlocks({ parent_id: id, over_id, active_id })
        );
      }
    }
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const date = new Date().toISOString();

    const { over, active } = event;

    if (over && active) {
      const movable_id = active.id as string;
      let name: BlockType = "text";
      let type;
      if (active.data?.current && "type" in active?.data.current) {
        type = active.data.current.type;
      }

      if (active.data?.current && "name" in active?.data.current) {
        name = active.data.current.name;
      }

      const droppable_id = (over.id as string).split("-")[0];
      // add children blocks
      if (over?.id === over.data.current?.parent_id + Droppableids.inline) {
        // alert(over.data.current.parentindex);
        if (over.data.current) {
          const parent_id = String(over.data.current.parent_id);

          dispatch(
            addInlineBlock({
              parent_id,
              data: { name, id: `${movable_id}-${date}` },
            })
          );
          return;
        }
      }
      // add parent blocks
      if (droppable_id === Droppableids.body_id && type !== "sortable") {
        dispatch(addBlock({ id: `${movable_id}-${date}`, name: name }));
      }
      if (type === "sortable") {
        return handleSortEvent(event);
      }
    }
  };

    if (!isDesktop) {
    return (
      <div className="flex items-center justify-center h-[94vh] w-full bg-gray-100">
        <p className="text-gray-600 text-center text-lg font-medium px-4">
          📱 This editor is currently only available on desktop devices.  
          Please switch to a laptop or desktop for the best experience.
        </p>
      </div>
    );
  }
  return (
    <div className="h-[94svh] w-full flex gap-3  " >
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
 
      >
        <Sidebar />
        <Canva />
      </DndContext>
    </div>
  );
};

export default Dashboard;
