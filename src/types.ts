export type BlockType =
  | "section"
  | "column"
  | "text"
  | "image"
  | "button"
  | "divider"
  | "table"
  | "raw_html";

export type BlockDataType = {
  id: string;
  name: BlockType;
  configs?: {
    styles?: BlockStyles;
    [key: string]: any;
  };
  blocks?: BlockDataType[];
};

export type StyleObject = React.CSSProperties;

export type BlockStyles = {
  [elementKey: string]: StyleObject;
};

export type BlockConfigs = {
  [blockKey: string]: {
    styles?: BlockStyles;
    [key: string]: any; // To allow flexibility for other possible properties
  };
};

export const Droppableids = {
  COLUMN:"columnDroppable",
  SECTION: "sectionDroppable",
};
