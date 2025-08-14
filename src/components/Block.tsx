import { BlockDataType, BlockType } from "@/types";
import React, { useState } from "react";
import Droppable from "./Droppable";
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



  return (
     
      <RenderBlock block={item}  />
  
  );
};

export default Block;
