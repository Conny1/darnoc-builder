import React from "react";
import Droppable from "./Droppable";
import { BlockDataType } from "@/types";
import Block from "./Block";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./Sortable";
import { updateSortedBlocks } from "@/redux/emailTemplateSlice";

const Canva = () => {
  const dropableData = useSelector(
    (state: RootState) => state.email.dropableData
  );

  return (
    <div className=" z-30 flex-1 p-6 bg-gradient-to-b from-white to-gray-50 overflow-y-auto">
      <Droppable id="droppeble">
        <SortableContext
          items={dropableData}
          strategy={verticalListSortingStrategy}
        >
          <div className="min-h-[90vh] w-full border-2 border-dashed border-gray-300 bg-white rounded-xl shadow-sm p-6 transition-all duration-200">
            {dropableData.length === 0 ? (
              <p className="text-gray-400 text-center text-sm py-10">
                📨 Drop your blocks here to start building
              </p>
            ) : (
              dropableData.map((item, i) => <Block key={i} item={item} />)
            )}
          </div>
        </SortableContext>
      </Droppable>
    </div>
  );
};

export default Canva;
