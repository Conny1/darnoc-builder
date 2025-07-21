import React, { useEffect } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";

type Props = {
  id: string;
  children: React.ReactNode;
  isParent: Boolean;
  parent_id?: string;
};

export function SortableItem({ id, children, isParent, parent_id }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: id,
      data: {
        type: "sortable",
        isParent: isParent,
        parent_id: parent_id,
      },
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div style={style} className="relative w-fit justify-self-center  group">
      {/* Styled drag handle */}
      <button
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        className=" cursor-grab absolute -left-7 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-md hover:bg-gray-200"
      >
        <GripVertical className="w-6 h-6  text-gray-500" />
      </button>

      {children}
    </div>
  );
}
