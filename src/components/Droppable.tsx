import React from "react";
import { useDroppable } from "@dnd-kit/core";
type Props = {
  id: string;
  children: React.ReactNode;
  parent_id?: string;
};
function Droppable({ id, children, parent_id }: Props) {
  const {  setNodeRef } = useDroppable({
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
    <div className=" removable h-auto w-full   " ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}

export default Droppable;
