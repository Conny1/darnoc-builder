import React from "react";
import Draggable from "./Draggable";
import {
  Heading,
  Text,
  Image,
  CaseUpper,
  LayoutTemplate,
  AlignVerticalJustifyEnd,
  LayoutPanelTop,
  Rows,
} from "lucide-react";

const blockItems = [
  { name: "header", icon: LayoutPanelTop },
  { name: "text", icon: Text },
  { name: "image", icon: Image },
  { name: "button", icon: CaseUpper },
  { name: "section", icon: Rows },
  { name: "body", icon: AlignVerticalJustifyEnd },
  { name: "footer", icon: LayoutTemplate },
];

const Sidebar = () => {
  return (
    <aside className="w-[260px] h-auto border-r bg-gray-50 shadow-sm flex flex-col ">
      <div className="p-5 border-b bg-white sticky top-0 z-10">
        <h2 className="text-xl font-semibold text-gray-900">📦 Blocks</h2>
        <p className="text-sm text-gray-500 mt-1">
          Drag and drop to the canvas
        </p>
      </div>

      <div className="flex flex-col gap-2 p-4">
        {blockItems.map(({ name, icon: Icon }, i) => (
          <Draggable key={i} id={`${name}-${i}`} name={name}>
            <div className="flex items-center gap-3 px-3 py-2 bg-white rounded-md shadow-sm hover:bg-gray-100 cursor-move border">
              <Icon className="w-5 h-5 text-gray-600" />
              <span className="capitalize text-sm font-medium text-gray-700">
                {name}
              </span>
            </div>
          </Draggable>
        ))}
      </div>

      {/* <footer className="p-4 border-t text-[11px] text-gray-400 text-center">
        © 2025 Darnoc Builder
      </footer> */}
    </aside>
  );
};

export default Sidebar;
