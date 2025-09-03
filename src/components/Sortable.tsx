import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";

type Props = {
  id: string;
  children: React.ReactNode;
  parent_id?: string;
  etype?:"container",
  ekey?:"divider"
};

export function SortableItem({ id, children, parent_id , etype, ekey}: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: id,
      data: {
        type: "sortable",
        parent_id,
      },
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,

    display: "inline-block",
    verticalAlign: "top",
  };

  return (
    <div
      data-element-type={etype}
      data-element-key={ekey}
      style={style}
      className=" removable  relative w-full  group h-fit   "
    >
      {/* Styled drag handle */}
      <button
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        className=" removable cursor-grab absolute -left-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-md hover:bg-gray-200"
      >
        <GripVertical className="  removable w-6 h-6  text-gray-500" />
      </button>

      {children}
    </div>
  );
}
