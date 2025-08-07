import React, { useEffect } from "react";
import { useDroppable } from "@dnd-kit/core";
type Props = {
  id: string;
  children: React.ReactNode;
  parent_id?: String;
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
  };

  return (
    <div className="h-auto w-fit " ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}

export default Droppable;
