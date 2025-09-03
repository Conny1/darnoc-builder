import React, { useState } from "react";
import {
  Layout,
  Columns,
  Type,
  ImageIcon,
  TextCursor,
  Minus,
} from "lucide-react"; 
import Draggable from "./Draggable";
import { useRouter } from "next/navigation";

const blockItems = [
  { name: "section", icon: Layout },
  { name: "column", icon: Columns },
  { name: "text", icon: Type },
  { name: "image", icon: ImageIcon },
  { name: "button", icon: TextCursor },
  { name: "divider", icon: Minus },
];

const Sidebar = () => {
  const [view, setView] = useState<"blocks" | "templates">("blocks");
  const navigate = useRouter() ; // ✅ router navigation

  return (
    <aside className="w-[260px] border-r bg-gray-50 shadow-sm flex flex-col">
      {/* Header */}
      <div className="p-5 border-b bg-white sticky top-0">
        <h2 className="text-xl font-semibold text-gray-900">📦 Builder</h2>
        <div className="flex gap-2 mt-3">
          {/* Blocks Button */}
          <button
            onClick={() => setView("blocks")}
            className={`flex-1 px-3 py-1 rounded-md text-sm font-medium transition ${
              view === "blocks"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Blocks
          </button>

          {/* Templates Button (Redirects) */}
          <button
            onClick={() => navigate.push("/email/templates")} // ✅ redirect to /templates
            className="flex-1 px-3 py-1 rounded-md text-sm font-medium transition bg-gray-200 text-gray-700 hover:bg-gray-300"
          >
            Templates
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-4">
        {view === "blocks" &&
          blockItems.map(({ name, icon: Icon }, i) => (
            <Draggable key={i} id={`${name}`} name={name}>
              <div className="flex items-center gap-3 px-3 py-2 bg-white rounded-md shadow-sm hover:bg-gray-100 border">
                <Icon className="w-5 h-5 text-gray-600" />
                <span className="capitalize text-sm font-medium text-gray-700">
                  {name}
                </span>
              </div>
            </Draggable>
          ))}
      </div>

      {/* Footer */}
      <footer className="p-4 border-t text-[11px] text-gray-400 text-center">
        © 2025 Darnoc Builder
      </footer>
    </aside>
  );
};

export default Sidebar;
