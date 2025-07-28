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
import RenderBlock from "./RenderBlock";

type Props = {
  item: BlockDataType;
};

const Block = ({ item }: Props) => {
  const dispatch = useDispatch();
  const [closeBTN, setcloseBTN] = useState(false);
  let measurements = {
    width: 576,
    height: 200,
    minConstraints: { x: 100, y: 100 },
    maxConstraints: { x: 1000, y: 1000 },
  };

  return (
    <SortableItem id={item.id} isParent={true}>
      <SortableContext
        items={item.blocks || []}
        strategy={verticalListSortingStrategy}
      >
        <ResizeComponent
          tailwindStyles="mx-auto bg-white hover:border hover:border-dashed"
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
              } absolute top-2 right-2 text-white bg-black hover:bg-red-600 p-1 rounded-full text-xs z-50`}
              onClick={() => dispatch(removeBlock(item.id))}
            >
              ✕
            </button>
            <RenderBlock block={item} />
          </div>
        </ResizeComponent>
      </SortableContext>
    </SortableItem>
  );
};

export default Block;
