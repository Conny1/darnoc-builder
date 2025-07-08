"use client";
import { Canva, Sidebar } from "@/components";
import React, { useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { BlockDataType, BlockType, Droppableids } from "@/types";

const Dashboard = () => {
  const [dropableData, setdropableData] = useState<BlockDataType[] | []>([]);

  const handleDragEnd = (event: DragEndEvent) => {
    let { over, active } = event;
    if (over && active) {
      let id = over.id as string;
      let name: BlockType = "text";
      if (active.data?.current && "name" in active?.data.current) {
        name = active.data.current.name;
      }
      //   alert(over.id);
      if (
        over.id === Droppableids.BODY ||
        over.id === Droppableids.FOOTER ||
        over.id === Droppableids.HEADER ||
        over.id === Droppableids.SECTION
      ) {
        // alert(over.data.current.parentindex);
        const updatedData = dropableData;
        if (over.data.current) {
          let index = Number(over.data.current.parentindex);
          let newData = updatedData[index];
          if (newData.blocks) {
            newData.blocks.push(name);
          } else {
            newData.blocks = [name];
          }
          updatedData[index] = newData;
          setdropableData(updatedData);

          console.log(updatedData);
          return;
        }
      }
      setdropableData((prev) => [...prev, { id: id, name: name }]);
    }
  };
  return (
    <div className=" h-[100vh] w-full flex gap-3 ">
      <DndContext onDragEnd={handleDragEnd}>
        <Sidebar />
        <Canva dropableData={dropableData} />
      </DndContext>
    </div>
  );
};

export default Dashboard;
