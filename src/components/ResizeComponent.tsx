import React, { useState } from "react";
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
type ResizeHandleAxis = "s" | "w" | "e" | "n" | "sw" | "nw" | "se" | "ne";

const ResizeComponent = ({ children, tailwindStyles, styles }: Props) => {
  const [handles, sethandles] = useState<ResizeHandleAxis[]>([]);
  return (
    <div onMouseOver={() => sethandles(["n", "s", "e", "w"])} className="p-3">
      <ResizableBox
        className={`${tailwindStyles} overflow-clip  flex bg-inherit  `}
        width={styles.width}
        height={styles.height}
        draggableOpts={{ grid: [25, 25] }}
        minConstraints={[styles.minConstraints.x, styles.minConstraints.y]}
        maxConstraints={[styles.maxConstraints.x, styles.maxConstraints.y]}
        resizeHandles={handles}
      >
        {children}
      </ResizableBox>
    </div>
  );
};

export default ResizeComponent;
