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
  function handleSortEvent(event: DragEndEvent, isParent: Boolean) {
    const { active, over } = event;

    if (active.id !== over?.id && isParent) {
      const oldIndex = dropableData.findIndex((item) => item.id === active.id);
      const newIndex = dropableData.findIndex((item) => item.id === over?.id);
      return dispatch(
        updateSortedBlocks(arrayMove(dropableData, oldIndex, newIndex))
      );
    }

    if (active.id !== over?.id && !isParent) {
      let parent_id = null;
      if (active.data?.current && "parent_id" in active?.data.current) {
        parent_id = active.data.current.parent_id;
      }
      let data = dropableData.find((item) => item.id === parent_id);
      console.log("inline", active.id, parent_id, over?.id, data);
      if (data && data.blocks) {
        const oldIndex = data?.blocks.findIndex(
          (item) => item.id === active.id
        );
        const newIndex = data.blocks.findIndex((item) => item.id === over?.id);
        return dispatch(
          updateInlineSortedBlocks({
            data: arrayMove(data.blocks, oldIndex, newIndex),
            parent_id,
          })
        );
      }
    }
  }

  const handleDragEnd = (event: DragEndEvent) => {
    let date = new Date().toISOString();

    let { over, active } = event;
    if (over && active) {
      let movable_id = active.id as string;
      let name: BlockType = "text";
      let type;
      let isParent = true;
      if (active.data?.current && "type" in active?.data.current) {
        type = active.data.current.type;
      }
      if (active.data?.current && "isParent" in active?.data.current) {
        isParent = active.data.current.isParent;
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
        return handleSortEvent(event, isParent);
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
