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
  blocks?: { name: BlockType; id: string }[];
};

export const Droppableids = {
  HEADER: "headerDroppable",
  BODY: "bodyDroppable",
  FOOTER: "footerDroppable",
  SECTION: "sectionDroppable",
};
