import { BlockDataType, BlockType } from "@/types";
import React, { useState } from "react";
import Droppable from "./Droppable";
import RenderInlineBlock from "./RenderInlineBlock";
import { useDispatch, useSelector } from "react-redux";
import {
  removeBlock,
  setActiveBlock,
  setcurrentElementKey,
  setcurrentElementType,
} from "@/redux/emailTemplateSlice";
import ResizeComponent from "./ResizeComponent";
import TextEditor from "./TextEditor";
import { SortableItem } from "./Sortable";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import RenderBlock from "./RenderBlock";
import { RootState } from "@/redux/store";
import { X } from "lucide-react";

type Props = {
  item: BlockDataType;
};

const Block = ({ item }: Props) => {
  const dispatch = useDispatch();

  const [closeBTN, setcloseBTN] = useState(false);

  return (
    <SortableItem id={item.id} isParent={true}>
      <button
        className={`${
          !closeBTN ? "hidden" : null
        } absolute top-2 right-2 text-white bg-black hover:bg-red-600 p-1 rounded-full text-xs z-50  `}
        onClick={() => dispatch(removeBlock(item.id))}
      >
        <X/>
      </button>
      <RenderBlock block={item} closeBTN={closeBTN} setcloseBTN={setcloseBTN} />
    </SortableItem>
  );
};

export default Block;
