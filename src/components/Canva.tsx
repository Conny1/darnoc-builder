import React from "react";
import Droppable from "./Droppable";
import { BlockDataType } from "@/types";
import Block from "./Block";
type Props = {
  dropableData: BlockDataType[];
};

const Canva = ({ dropableData }: Props) => {
  return (
    <div className="flex-1  flex p-3  ">
      <Droppable id="droppeble">
        <div className=" h-[70vh] w-full border border-dotted border-gray-400 ">
          {dropableData.length === 0 && <p> Drop your content here </p>}

          {dropableData.map((item, i) => {
            return (
              <Block
                key={i}
                item={item.name}
                data={item.blocks}
                parentindex={i}
              />
            );
          })}
        </div>
      </Droppable>
    </div>
  );
};

export default Canva;
