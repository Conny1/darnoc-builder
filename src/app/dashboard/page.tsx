"use client";
import { Canva, Sidebar } from "@/components";
import React, { useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { BlockDataType, BlockType, Droppableids } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { addBlock, addInlineBlock } from "@/redux/emailTemplateSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  const handleDragEnd = (event: DragEndEvent) => {
    let date = new Date().toISOString();
    let { over, active } = event;
    if (over && active) {
      let movable_id = active.id as string;
      let name: BlockType = "text";
      if (active.data?.current && "name" in active?.data.current) {
        name = active.data.current.name;
      }

      let droppable_id = (over.id as string).split("-")[0];
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
      dispatch(addBlock({ id: `${movable_id}-${date}`, name: name }));
    }
  };
  return (
    <div className="h-[94svh] w-full flex gap-3">
      <DndContext onDragEnd={handleDragEnd}>
        <Sidebar />
        <Canva />
      </DndContext>
    </div>
  );
};

export default Dashboard;
