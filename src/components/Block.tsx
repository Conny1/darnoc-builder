import { BlockDataType } from "@/types";
import React from "react";
import RenderBlock from "./RenderBlock";

type Props = {
  item: BlockDataType;
};

const Block = ({ item }: Props) => {



  return (
     
      <RenderBlock block={item}   />
  
  );
};

export default Block;
