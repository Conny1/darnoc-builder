import React from "react";
import { BlockDataType } from "@/types";
import RenderBlock from "./RenderBlock";

type Props = {
  dropableData: BlockDataType[];
};

const RenderTemplate = ({ dropableData }: Props) => {
  return (
    <div>
      <div className=" border-2 border-dashed border-gray-300 bg-red flex  justify-center ">
        <div
          style={{
            display: "inline-block",
            margin: " 0px auto",
            textAlign: "center",
            width: "602px",
            maxWidth: "100%",
            height: "100%",
            backgroundColor: "inherit",
          }}
        >
          {dropableData.length === 0 ? (
            <p className="text-gray-400 text-center text-sm py-10">
              📨 Drop your blocks here to start building
            </p>
          ) : (
            dropableData.map((item, i) => <RenderBlock block={item} key={i} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default RenderTemplate;
