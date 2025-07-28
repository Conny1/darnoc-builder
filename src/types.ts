export type BlockType =
  | "header"
  | "hero"
  | "features"
  | "cta"
  | "about"
  | "services"
  | "pricing"
  | "testimonials"
  | "team"
  | "blog"
  | "contact"
  | "footer"
  | "faq"
  | "gallery"
  | "countdown"
  | "video"
  | "app_download"
  | "text";

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
  HEADER: "headerDroppable",
  BODY: "bodyDroppable",
  FOOTER: "footerDroppable",
  SECTION: "sectionDroppable",
};
