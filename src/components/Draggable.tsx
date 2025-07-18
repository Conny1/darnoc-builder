import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

type Props = {
  id: string;
  children: React.ReactNode;
  name?: string;
};
function Draggable({ id, children, name }: Props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    data: {
      name,
    },
  });

  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };

  return (
    <button
      className="z-[999] bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {children}
    </button>
  );
}

export default Draggable;
