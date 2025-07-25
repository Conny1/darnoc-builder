export type BlockType =
  | "header"
  | "text"
  | "footer"
  | "body"
  | "button"
  | "image"
  | "section";

export type BlockDataType = {
  id: string;
  name: BlockType;
  styles?: string;
  blocks?: BlockDataType[];
};

export const Droppableids = {
  HEADER: "headerDroppable",
  BODY: "bodyDroppable",
  FOOTER: "footerDroppable",
  SECTION: "sectionDroppable",
};
