import React, { useState } from "react";
import {
  LayoutPanelTop,
  Rows,
  PanelTopClose,
  MousePointerClick,
  Info,
  Gem,
  DollarSign,
  Star,
  Users,
  FileText,
  Contact,
  LayoutTemplate,
  HelpCircle,
  GalleryHorizontal,
  Clock3,
  Play,
  AppWindow,
} from "lucide-react";
import UiBlocksComponent from "./UiBlocksComponent";

const blockItems = [
  { name: "header", icon: LayoutPanelTop },
  { name: "hero", icon: PanelTopClose },
  { name: "features", icon: Rows },
  { name: "cta", icon: MousePointerClick },
  { name: "about", icon: Info },
  { name: "services", icon: Gem },
  { name: "pricing", icon: DollarSign },
  { name: "testimonials", icon: Star },
  { name: "team", icon: Users },
  { name: "blog", icon: FileText },
  { name: "contact", icon: Contact },
  { name: "footer", icon: LayoutTemplate },
  // Optional / Advanced
  { name: "faq", icon: HelpCircle },
  { name: "gallery", icon: GalleryHorizontal },
  { name: "countdown", icon: Clock3 },
  { name: "video", icon: Play },
  { name: "app_download", icon: AppWindow },
];

const Sidebar = () => {
  return (
    <aside className="  w-[260px] overflow-y-scroll border-r bg-gray-50 shadow-sm flex flex-col ">
      <div className="p-5 border-b bg-white sticky top-0 z-10">
        <h2 className="text-xl font-semibold text-gray-900">📦 Blocks</h2>
        <p className="text-sm text-gray-500 mt-1">i will put something here</p>
      </div>

      <div className=" flex flex-col gap-2 p-4">
        {blockItems.map(({ name, icon: Icon }, i) => {
          const [modal, setmodal] = useState(false);

          return (
            <div
              onMouseOver={() => setmodal(true)}
              onMouseLeave={() => setmodal(false)}
              key={i}
              className="  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              <div className="  flex items-center gap-3 px-3 py-2 bg-white rounded-md shadow-sm hover:bg-gray-100  border">
                <Icon className="w-5 h-5 text-gray-600" />
                <span className="capitalize text-sm font-medium text-gray-700">
                  {name}
                </span>
              </div>
              {modal && <UiBlocksComponent name={name} />}
            </div>
          );
        })}
      </div>

      <footer className="p-4 border-t text-[11px] text-gray-400 text-center">
        © 2025 Darnoc Builder
      </footer>
    </aside>
  );
};

export default Sidebar;
