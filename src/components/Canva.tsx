import React from "react";
import Droppable from "./Droppable";
import { BlockDataType } from "@/types";
import Block from "./Block";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Canva = () => {
  const dropableData = useSelector(
    (state: RootState) => state.email.dropableData
  );

  return (
    <div className="flex-1 p-6 bg-gradient-to-b from-white to-gray-50 overflow-y-auto">
      <Droppable id="droppeble">
        <div className="min-h-[90vh] w-full border-2 border-dashed border-gray-300 bg-white rounded-xl shadow-sm p-6 transition-all duration-200">
          {dropableData.length === 0 ? (
            <p className="text-gray-400 text-center text-sm py-10">
              📨 Drop your blocks here to start building
            </p>
          ) : (
            dropableData.map((item, i) => (
              <Block
                key={i}
                item={item.name}
                data={item.blocks}
                block_id={item.id}
              />
            ))
          )}
        </div>
      </Droppable>
    </div>
  );
};

export default Canva;
