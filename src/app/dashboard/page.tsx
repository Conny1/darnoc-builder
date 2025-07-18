"use client";
import { Canva, Sidebar } from "@/components";
import React, { useState } from "react";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { BlockDataType, BlockType, Droppableids } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  addBlock,
  addInlineBlock,
  updateSortedBlocks,
} from "@/redux/emailTemplateSlice";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

const Dashboard = () => {
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
    console.log("meme");
    if (active.id !== over?.id) {
      const oldIndex = dropableData.findIndex((item) => item.id === active.id);
      const newIndex = dropableData.findIndex((item) => item.id === over?.id);
      dispatch(updateSortedBlocks(arrayMove(dropableData, oldIndex, newIndex)));
    }
  }

  const handleDragEnd = (event: DragEndEvent) => {
    let date = new Date().toISOString();

    let { over, active } = event;
    if (over && active) {
      let movable_id = active.id as string;
      let name: BlockType = "text";
      let type;
      if (active.data?.current && "type" in active?.data.current) {
        type = active.data.current.type;
        console.log(type);
      }
      if (active.data?.current && "name" in active?.data.current) {
        name = active.data.current.name;
      }

      let droppable_id = (over.id as string).split("-")[0];
      console.log(droppable_id, over.id, "active", active.id);
      if (
        droppable_id === Droppableids.BODY ||
        droppable_id === Droppableids.FOOTER ||
        droppable_id === Droppableids.HEADER ||
        droppable_id === Droppableids.SECTION
      ) {
        // alert(over.data.current.parentindex);
        if (over.data.current) {
          let parent_id = String(over.data.current.parent_id);

          dispatch(
            addInlineBlock({
              parent_id,
              data: { name, id: `${movable_id}-${date}` },
            })
          );
          // console.log(updatedData);
          return;
        }
      }
      if (droppable_id === "droppeble" && type !== "sortable") {
        dispatch(addBlock({ id: `${movable_id}-${date}`, name: name }));
      }
      if (type === "sortable") {
        return handleSortEvent(event);
      }
    }
  };
  return (
    <div className="h-[94svh] w-full flex gap-3">
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
