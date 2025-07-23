import { BlockDataType, BlockType } from "@/types";
import React, { useState } from "react";
import Droppable from "./Droppable";
import RenderInlineBlock from "./RenderInlineBlock";
import { useDispatch } from "react-redux";
import { removeBlock } from "@/redux/emailTemplateSlice";
import ResizeComponent from "./ResizeComponent";
import TextEditor from "./TextEditor";
import { SortableItem } from "./Sortable";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

type Props = {
  item: BlockType;
  data?: BlockDataType[];
  block_id: string;
};

const Block = ({ item, data, block_id }: Props) => {
  let block;
  const id = `${new Date().toISOString()}-${block_id}`;
  const dispatch = useDispatch();
  const [closeBTN, setcloseBTN] = useState(false);
  let measurements = {
    width: 576,
    height: 200,
    minConstraints: { x: 100, y: 100 },
    maxConstraints: { x: 1000, y: 1000 },
  };

  switch (item) {
    case "header":
      measurements = {
        width: 576,
        height: 100,
        minConstraints: { x: 70, y: 70 },
        maxConstraints: { x: 1000, y: 500 },
      };
      block = (
        <Droppable id={`headerDroppable-${id}`} parent_id={block_id}>
          <div className=" bg-blue-600 text-white px-6 py-4 text-center rounded-md h-auto  ">
            <h1 className="text-2xl font-bold">Welcome to Darnoc!</h1>
            <p className="text-sm mt-1">Thanks for joining us</p>

            {data?.map((item, i) => (
              <RenderInlineBlock key={i} item={item} parent_id={block_id} />
            ))}
          </div>
        </Droppable>
      );
      break;

    case "body":
      (measurements = {
        width: 576,
        height: 400,
        minConstraints: { x: 200, y: 200 },
        maxConstraints: { x: 1000, y: 1000 },
      }),
        (block = (
          <Droppable id={`bodyDroppable-${id}`} parent_id={block_id}>
            <div className="p-6 space-y-4 text-gray-700  ">
              <p>
                Hi <strong>Joel</strong>,
              </p>
              <p>
                We’re excited to have you on board. Start building beautiful
                email templates with our drag-and-drop editor.
              </p>
              <p>Click below to begin:</p>

              {data?.map((item, i) => {
                return (
                  <RenderInlineBlock key={i} item={item} parent_id={block_id} />
                );
              })}
            </div>
          </Droppable>
        ));
      break;

    case "button":
      measurements = {
        width: 100,
        height: 40,
        minConstraints: { x: 40, y: 20 },
        maxConstraints: { x: 400, y: 200 },
      };
      block = (
        <div className="flex flex-1  items-center justify-center  bg-blue-600 hover:bg-blue-700">
          <a
            href="#"
            className="inline-block  text-white text-sm font-semibold px-5 py-3 rounded"
          >
            Click me
          </a>
        </div>
      );
      break;

    case "image":
      (measurements = {
        width: 300,
        height: 200,
        minConstraints: { x: 100, y: 100 },
        maxConstraints: { x: 700, y: 500 },
      }),
        (block = (
          <img
            src="https://via.placeholder.com/600x200"
            alt="email banner"
            className="w-full rounded  "
          />
        ));
      break;

    case "text":
      (measurements = {
        width: 400,
        height: 70,
        minConstraints: { x: 100, y: 80 },
        maxConstraints: { x: 800, y: 600 },
      }),
        (block = (
          <TextEditor
            element=" <p>
          This is an editable text block. You can write anything here.
        </p>"
          />
        ));

      break;
    case "section":
      measurements = {
        width: 576,
        height: 200,
        minConstraints: { x: 150, y: 150 },
        maxConstraints: { x: 900, y: 800 },
      };
      block = (
        <Droppable id={`sectionDroppable-${id}`} parent_id={block_id}>
          <div className="p-6 space-y-4 text-gray-700   bg-white">
            {data && data.length > 0 ? (
              data.map((item, i) => (
                <RenderInlineBlock key={i} item={item} parent_id={block_id} />
              ))
            ) : (
              <p className="text-gray-400 italic">Drop content here</p>
            )}
          </div>
        </Droppable>
      );
      break;

    case "footer":
      measurements = {
        width: 576,
        height: 70,
        minConstraints: { x: 50, y: 50 },
        maxConstraints: { x: 800, y: 400 },
      };
      block = (
        <Droppable id={`footerDroppable-${id}`} parent_id={block_id}>
          <div className="bg-gray-100 text-center text-sm text-gray-500 px-6 py-4">
            <p>&copy; 2025 Darnoc Inc. All rights reserved.</p>
            <p>123 Nairobi Lane, Kenya</p>
            {data?.map((item, i) => {
              return (
                <RenderInlineBlock key={i} item={item} parent_id={block_id} />
              );
            })}
          </div>
        </Droppable>
      );
      break;

    default:
      block = <p className="text-red-500">Unknown block type</p>;
  }

  return (
    <SortableItem id={block_id} isParent={true}>
      <SortableContext
        items={data || []}
        strategy={verticalListSortingStrategy}
      >
        <ResizeComponent
          tailwindStyles=" mx-auto bg-white   hover:border hover:border-dashed"
          styles={measurements}
        >
          <div
            onMouseOver={() => setcloseBTN(true)}
            onMouseLeave={() => setcloseBTN(false)}
            className="relative flex flex-col w-full h-full"
          >
            <button
              className={`${
                !closeBTN ? "hidden" : null
              }  absolute top-2 right-2 text-white bg-black hover:bg-red-600 p-1 rounded-full text-xs z-50  `}
              onClick={() => {
                console.log("clicked");
                dispatch(removeBlock(block_id));
              }}
            >
              ✕
            </button>
            {block}
          </div>
        </ResizeComponent>
      </SortableContext>
    </SortableItem>
  );
};

export default Block;
