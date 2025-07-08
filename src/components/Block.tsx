import { BlockDataType, BlockType } from "@/types";
import React, { useEffect } from "react";
import Droppable from "./Droppable";
import RenderInlineBlock from "./RenderInlineBlock";

type Props = {
  item: BlockType;
  data?: BlockType[];
  parentindex: number;
};

const Block = ({ item, data, parentindex }: Props) => {
  let block;
  useEffect(() => {}, [parentindex]);

  switch (item) {
    case "header":
      block = (
        <Droppable id="headerDroppable" parentindex={parentindex}>
          <div className="bg-blue-600 text-white px-6 py-4 text-center">
            <h1 className="text-2xl font-bold">Welcome to Darnoc!</h1>
            <p className="text-sm mt-1">Thanks for joining us</p>
            {data?.map((item, i) => {
              return <RenderInlineBlock key={i} item={item} />;
            })}
          </div>
        </Droppable>
      );
      break;

    case "body":
      block = (
        <Droppable id="bodyDroppable" parentindex={parentindex}>
          <div className="p-6 space-y-4 text-gray-700">
            <p>
              Hi <strong>Joel</strong>,
            </p>
            <p>
              We’re excited to have you on board. Start building beautiful email
              templates with our drag-and-drop editor.
            </p>
            <p>Click below to begin:</p>
            {data?.map((item, i) => {
              return <RenderInlineBlock key={i} item={item} />;
            })}
          </div>
        </Droppable>
      );
      break;

    case "button":
      block = (
        <div className="text-center py-4">
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-3 rounded"
          >
            Start Building
          </a>
        </div>
      );
      break;

    case "image":
      block = (
        <img
          src="https://via.placeholder.com/600x200"
          alt="email banner"
          className="w-full rounded"
        />
      );
      break;

    case "text":
      block = (
        <p className="text-gray-700 p-4">
          This is an editable text block. You can write anything here.
        </p>
      );
      break;

    case "footer":
      block = (
        <Droppable id="footerDroppable" parentindex={parentindex}>
          <div className="bg-gray-100 text-center text-sm text-gray-500 px-6 py-4">
            <p>&copy; 2025 Darnoc Inc. All rights reserved.</p>
            <p>123 Nairobi Lane, Kenya</p>
            {data?.map((item, i) => {
              return <RenderInlineBlock key={i} item={item} />;
            })}
          </div>
        </Droppable>
      );
      break;

    default:
      block = <p className="text-red-500">Unknown block type</p>;
  }

  return (
    <div className="max-w-xl mx-auto bg-white shadow rounded overflow-hidden">
      {block}
    </div>
  );
};

export default Block;
