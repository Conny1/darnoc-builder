"use client";
import React, { useRef, useState } from "react";
import Droppable from "./Droppable";
import { Droppableids } from "@/types";
import Block from "./Block";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import StyleEditor from "./StyleEditor";
import { Code, Monitor, Redo, Smartphone, Undo } from "lucide-react";
import DisplayCode from "./DisplayCode";
import { redoAction, undoAction } from "@/redux/emailTemplateSlice";

const Canva = () => {
  const dropableData = useSelector(
    (state: RootState) => state.email.dropableData
  );
  const undo = useSelector((state: RootState) => state.email.prevCanvasState);
  const redo = useSelector((state: RootState) => state.email.nextCanvaState);

  const [showCode, setshowCode] = useState(false);
  const [code, setcode] = useState("");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [previewMode, setPreviewMode] = useState<"desktop" | "mobile">(
    "desktop"
  );
  const dispatch = useDispatch();

  // Apply mobile scaling transform

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
    <div className=" flex gap-3  flex-1  bg-gradient-to-b from-white to-gray-50 overflow-y-auto">
      <div className="flex-1 flex flex-col items-center  ">
        <div className="flex w-full max-w-[800px] gap-3 bg-blue-500 p-3 items-center justify-center text-white rounded-xl shadow-md">
          {/* Undo / Redo */}
          <div className="flex gap-3.5">
            <button
              onClick={() => dispatch(undoAction())}
              disabled={undo.length === 0}
              className={`p-2 rounded-xl flex items-center justify-center transition-colors duration-200
        ${
          undo.length > 0
            ? "bg-white/20 hover:bg-white/30 text-white"
            : "bg-white/10 text-white/50 cursor-not-allowed"
        }`}
            >
              <Undo className="w-5 h-5" />
            </button>

            <button
              onClick={() => dispatch(redoAction())}
              disabled={redo.length === 0}
              className={`p-2 rounded-xl flex items-center justify-center transition-colors duration-200
        ${
          redo.length > 0
            ? "bg-white/20 hover:bg-white/30 text-white"
            : "bg-white/10 text-white/50 cursor-not-allowed"
        }`}
            >
              <Redo className="w-5 h-5" />
            </button>
          </div>

          {/* Desktop Preview */}
          <button
            onClick={() => {
              setPreviewMode("desktop");
              setshowCode(false);
            }}
            className={`p-2 rounded-xl flex items-center justify-center transition-colors duration-200
      ${
        !showCode && previewMode === "desktop"
          ? "bg-white/30 text-white shadow-inner"
          : "bg-white/10 hover:bg-white/20 text-white/80"
      }`}
          >
            <Monitor className="w-5 h-5" />
          </button>

          {/* Mobile Preview */}
          <button
            onClick={() => {
              setPreviewMode("mobile");
              setshowCode(false);
            }}
            className={`p-2 rounded-xl flex items-center justify-center transition-colors duration-200
      ${
        !showCode && previewMode === "mobile"
          ? "bg-white/30 text-white shadow-inner"
          : "bg-white/10 hover:bg-white/20 text-white/80"
      }`}
          >
            <Smartphone className="w-5 h-5" />
          </button>

          {/* Code Button */}
          {previewMode !== "mobile" && (
            <button
              onClick={generateCode}
              className="p-2 rounded-xl flex items-center justify-center transition-colors duration-200
        bg-white/10 hover:bg-white/20 text-white/80"
            >
              <Code className="w-5 h-5" />
            </button>
          )}
        </div>

        {showCode ? (
          <DisplayCode code={code} />
        ) : (
          <Droppable id={Droppableids.body_id}>
            <SortableContext
              items={dropableData}
              strategy={verticalListSortingStrategy}
            >
              <div className=" h-[90vh]  overflow-x-scroll border-2 border-dashed border-gray-300 bg-red flex  justify-center ">
                <div
                  ref={containerRef}
                  style={{
                    display: "inline-block",
                    margin: " 0px auto",
                    textAlign: "center",
                    width: previewMode === "desktop" ? "602px" : "360px",
                    maxWidth: "100%",
                    height: "100%",
                    backgroundColor: "inherit",
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
