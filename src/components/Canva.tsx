"use client";
import React, { useEffect, useRef, useState } from "react";
import Droppable from "./Droppable";
import {  Droppableids } from "@/types";
import Block from "./Block";
import {  useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

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
  const [previewMode, setPreviewMode] = useState<"desktop" | "mobile">(
    "desktop"
  );

  // Apply mobile scaling transform
  useEffect(() => {
    if (!containerRef.current) return;

    if (previewMode === "mobile") {
      const containerWidth = containerRef.current.offsetWidth;
      const mobileWidth = 300; // Standard mobile width
      const scale = mobileWidth / containerWidth;

      containerRef.current.style.transform = `scale(${scale})`;
      containerRef.current.style.transformOrigin = "top left";
    } else {
      containerRef.current.style.transform = "none";
    }
  }, [previewMode]);
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
            onClick={() => {
              setPreviewMode("desktop");
              setshowCode(false);
            }}
            className={` p-1 rounded-2xl cursor-pointer ${
              !showCode && previewMode === "desktop"
                ? "bg-blue-600"
                : "bg-inherit"
            } `}
          >
            <Monitor />
          </button>
          <button
            onClick={() => {
              setPreviewMode("mobile");
              setshowCode(false);
            }}
            className={` p-1 rounded-2xl cursor-pointer ${
              !showCode && previewMode === "mobile"
                ? "bg-blue-600"
                : "bg-inherit"
            } `}
          >
            <Smartphone />
          </button>

      { previewMode !=="mobile" &&   <button onClick={generateCode} className=" cursor-pointer  ">
            <Code />
          </button>}
        </div>
        {showCode ? (
          <DisplayCode code={code} />
        ) : (
          <Droppable id={Droppableids.body_id}>
            <SortableContext
              items={dropableData}
              strategy={verticalListSortingStrategy}
            >
              <div className=" h-[90vh] p-3 border-2 border-dashed border-gray-300 bg-red">
                <div
                  ref={containerRef}
                  style={{
                    display: "inline-block",
                    textAlign: "center",
                    width: "600px",
                    maxWidth: "95%",
                    height:"100%",
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
