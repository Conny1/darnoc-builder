import React from "react";
import Draggable from "./Draggable";

const Sidebar = () => {
  let data = ["header", "text", "footer", "body", "button", "image", "section"];
  return (
    <div className="  w-[25%] outline-1 outline-gray-400  ">
      <div className="flex flex-col gap-3 p-3 ">
        {data.map((item, i) => (
          <Draggable key={i} id={`${item}-${i}`} name={item}>
            <span>{item}</span>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
