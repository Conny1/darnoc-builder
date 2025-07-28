import React from "react";
import Draggable from "./Draggable";

const UiBlocksComponent = ({ name }: { name: string }) => {
  return (
    <aside className=" z-50 w-[260px] h-auto min-h-60 absolute left-30    border-r bg-gray-50 shadow-sm flex flex-col ">
      <div className="p-5 border-b bg-white sticky top-0 z-10">
        <h2 className="text-xl font-semibold text-gray-900">{name} 📦blocks</h2>
        <p className="text-sm text-gray-500 mt-1">
          Drag and drop to the canvas
        </p>
      </div>

      <div className="flex flex-col gap-2 p-4">
        {/* {blockItems.map(({ name, icon: Icon }, i) => ( */}
        <Draggable id={`${name}`} name={name}>
          <div className="flex items-center gap-3 px-3 py-2 bg-white rounded-md shadow-sm hover:bg-gray-100  border">
            <span className="capitalize text-sm font-medium text-gray-700">
              {name}
            </span>
          </div>
        </Draggable>
        {/* ))} */}
      </div>
    </aside>
  );
};

export default UiBlocksComponent;
