"use client";
import React, { useRef, useState } from "react";
import Droppable from "./Droppable";
import { BlockDataType, Droppableids } from "@/types";
import Block from "./Block";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./Sortable";
import { updateSortedBlocks } from "@/redux/emailTemplateSlice";
import StyleEditor from "./StyleEditor";
import { Code, Monitor, Smartphone } from "lucide-react";
import DisplayCode from "./DisplayCode";

const Canva = () => {
  const dropableData = useSelector(
    (state: RootState) => state.email.dropableData
  );
  const [showCode, setshowCode] = useState(false);
  const [code, setcode] = useState("");
  const containerRef = useRef<HTMLDivElement | null>(null);

  const generateCode = () => {
    if (!containerRef.current) {
      console.warn("Email container not found");
      return;
    }

    // Clone the element
    const clone = containerRef.current.cloneNode(true) as HTMLElement;

    // Remove unwanted elements
    clone.querySelectorAll(".removable").forEach((el) => {
      const parent = el.parentNode;
      while (el.firstChild) {
        parent?.insertBefore(el.firstChild, el);
      }
      el.remove();
    });
    // remove remaining once with no children
    // clone.querySelectorAll(".removable").forEach((el) => el.remove());

    const html = `
<!doctype html>
<html>
  <head><meta charset="utf-8"></head>
    <body style="margin:0; padding:0; background-color:#f5f5f5; text-align:center;">${clone.outerHTML}</body>
</html>`;

    setcode(html.trim());
    setshowCode(true);
  };

  return (
    <div className="  flex  gap-3 z-30 flex-1  bg-gradient-to-b from-white to-gray-50 overflow-y-auto">
      <div className="flex-1 flex flex-col items-center  ">
        <div className="flex w-full max-w-[800px] gap-3 bg-blue-300 p-3 items-center justify-center text-white ">
          <button
            onClick={() => setshowCode(false)}
            className=" cursor-pointer "
          >
            <Monitor />
          </button>
          <button className=" cursor-pointer ">
            <Smartphone />
          </button>

          <button onClick={generateCode} className=" cursor-pointer  ">
            <Code />
          </button>
        </div>
        {showCode ? (
          <DisplayCode code={code} />
        ) : (
          <Droppable id={Droppableids.body_id}>
            <SortableContext
              items={dropableData}
              strategy={verticalListSortingStrategy}
            > 
            <div className=" inline-block w-fit h-fit p-3 border-2 border-dashed border-gray-300 bg-white" >
               <div
                ref={containerRef}
                style={{
                  display: "inline-block",
                   textAlign:"center",
                  minHeight: "90vh",
                  width: "601px",
                // Tailwind's gray-300
                  backgroundColor: "#ffffff",
                }}
              >
                {dropableData.length === 0 ? (
                  <p className="text-gray-400 text-center text-sm py-10">
                    📨 Drop your blocks here to start building
                  </p>
                ) : (
                  dropableData.map((item, i) => <Block key={i} item={item} />)
                )}
              </div>
            </div>
             
            </SortableContext>
          </Droppable>
        )}
      </div>

      <StyleEditor />
    </div>
  );
};

export default Canva;
