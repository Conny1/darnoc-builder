import React from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

type Props = {
  children: React.ReactNode;
  tailwindStyles: string;
  styles: {
    width: number;
    height: number;
    minConstraints: { x: number; y: number };
    maxConstraints: { x: number; y: number };
  };
};
const ResizeComponent = ({ children, tailwindStyles, styles }: Props) => {
  return (
    <ResizableBox
      className={`${tailwindStyles} overflow-clip  flex  `}
      width={styles.width}
      height={styles.height}
      draggableOpts={{ grid: [25, 25] }}
      minConstraints={[styles.minConstraints.x, styles.minConstraints.y]}
      maxConstraints={[styles.maxConstraints.x, styles.maxConstraints.y]}
      resizeHandles={["n", "s", "e", "w"]}
    >
      {children}
    </ResizableBox>
  );
};

export default ResizeComponent;
