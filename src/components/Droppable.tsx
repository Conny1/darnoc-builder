import React from "react";
import { useDroppable } from "@dnd-kit/core";
type Props = {
  id: string;
  children: React.ReactNode;
  parent_id?: string;
};
function Droppable({ id, children, parent_id }: Props) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
    data: {
      parent_id,
    },
  });
  
  const style = {
    // opacity: isOver ? 1 : 0.5,
       display: "inline-block",
        verticalAlign: "top",
  };


  return (
    <div className={ `  removable h-fit w-full   ${isOver?" outline-4 outline-green-500":"outline-none"} `} ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}

export default Droppable;
