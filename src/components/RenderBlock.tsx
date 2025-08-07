import { BlockDataType, BlockType } from "@/types";
import React, { JSX, useEffect, useState } from "react";
import Droppable from "./Droppable";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveBlock,
  setcurrentElementKey,
  setcurrentElementType,
} from "@/redux/emailTemplateSlice";
import { RootState } from "@/redux/store";
import "../app/globals.css";

type Props = {
  block: BlockDataType;
  setcloseBTN: React.Dispatch<React.SetStateAction<boolean>>;
  closeBTN: boolean;
};

const RenderBlock = ({
  block,
  closeBTN,
  setcloseBTN,
}: Props): JSX.Element | null => {
  const [active, setactive] = useState(false);
  const [closeChild, setcloseChild] = useState(false);
  const dispatch = useDispatch();
  const activeid = useSelector(
    (state: RootState) => state.email.activeBlock?.id
  );
  const activeKey = useSelector(
    (state: RootState) => state.email.currentElementKey
  );
  const handleClick = (e: React.MouseEvent) => {
    const elementType = (e.target as HTMLElement).getAttribute(
      "data-element-type"
    );
    const elementKey = (e.target as HTMLElement).getAttribute(
      "data-element-key"
    );

    console.log("Clicked:", elementType, elementKey);
    dispatch(setcurrentElementType(elementType as string));
    dispatch(setcurrentElementKey(elementKey as string));
  };

  switch (block.name) {
    case "section":
      return (
        <Droppable id="sectionDroppable" parent_id={block.id}>
          <div
            onMouseOver={() => setcloseBTN(true)}
            onMouseLeave={() => setcloseBTN(false)}
            onClick={(e) => {
              e.stopPropagation();

              setactive((prev) => !prev);
              dispatch(setActiveBlock(block.id));
              handleClick(e);
            }}
            style={block.configs?.styles?.parent}
            className="hover:border hover:border-dashed"
            data-element-type="container"
            data-element-key="parent"
          >
            {block?.blocks && block.blocks.length === 0 ? (
              <p>Section Container</p>
            ) : (
              block.blocks?.map((child) => (
                <RenderBlock
                  key={child.id}
                  block={child}
                  closeBTN={closeChild}
                  setcloseBTN={setcloseChild}
                />
              ))
            )}
          </div>
        </Droppable>
      );

    case "column":
      return (
        <Droppable id="columnDroppable" parent_id={block.id}>
          <div
            onMouseOver={() => setcloseBTN(true)}
            onMouseLeave={() => setcloseBTN(false)}
            onClick={(e) => {
              e.stopPropagation();

              setactive((prev) => !prev);
              dispatch(setActiveBlock(block.id));
              handleClick(e);
            }}
            style={block.configs?.styles?.column}
            data-element-type="container"
            data-element-key="column"
          >
            {block.blocks?.map((child) => (
              <RenderBlock
                key={child.id}
                block={child}
                closeBTN={closeChild}
                setcloseBTN={setcloseChild}
              />
            ))}
          </div>
        </Droppable>
      );

    case "text":
      return (
        <div
          onMouseOver={() => setcloseBTN(true)}
          onMouseLeave={() => setcloseBTN(false)}
          onClick={(e) => {
            e.stopPropagation();

            setactive((prev) => !prev);
            dispatch(setActiveBlock(block.id));
            handleClick(e);
          }}
          style={block.configs?.styles?.text}
          data-element-type="text"
          data-element-key="text"
        >
          {block.configs?.content || "TEXT AREA."}
        </div>
      );

    case "image":
      return (
        <img
          onMouseOver={() => setcloseBTN(true)}
          onMouseLeave={() => setcloseBTN(false)}
          onClick={(e) => {
            e.stopPropagation();

            setactive((prev) => !prev);
            dispatch(setActiveBlock(block.id));
            handleClick(e);
          }}
          src={block.configs?.src}
          alt={block.configs?.alt || ""}
          style={block.configs?.styles?.image}
          data-element-type="image"
          data-element-key="image"
        />
      );

    case "button":
      return (
        <a
          onMouseOver={() => setcloseBTN(true)}
          onMouseLeave={() => setcloseBTN(false)}
          onClick={(e) => {
            e.stopPropagation();

            setactive((prev) => !prev);
            dispatch(setActiveBlock(block.id));
            handleClick(e);
          }}
          href={block.configs?.href || "#"}
          style={block.configs?.styles?.button}
          data-element-type="button"
          data-element-key="button"
        >
          {block.configs?.content || "Click me"}
        </a>
      );

    // case "divider":
    //   return (
    //     <div
    //       style={
    //         block.configs?.styles?.divider || {
    //           height: "1px",
    //           margin: "16px 0",
    //           backgroundColor: "#e0e0e0",
    //         }
    //       }
    //       data-element-type="divider"
    //       data-element-key="divider"
    //     />
    //   );

    // case "table":
    //   return (
    //     <table style={block.configs?.styles?.table} data-element-type="table">
    //       {block.configs?.header && (
    //         <thead style={block.configs?.styles?.thead}>
    //           <tr>
    //             {block.configs.header.map((h: string, i: number) => (
    //               <th key={i} style={block.configs?.styles?.th}>
    //                 {h}
    //               </th>
    //             ))}
    //           </tr>
    //         </thead>
    //       )}
    //       <tbody>
    //         {(block.configs?.rows || []).map((row: [string], ri: number) => (
    //           <tr
    //             key={ri}
    //             style={
    //               ri % 2 === 1
    //                 ? block.configs?.styles?.altRow
    //                 : block.configs?.styles?.row
    //             }
    //           >
    //             {row?.map((cell: string, ci: number) => (
    //               <td key={ci} style={block.configs?.styles?.td}>
    //                 {cell}
    //               </td>
    //             ))}
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   );

    // case "raw_html":
    // return (
    //   <div
    //     dangerouslySetInnerHTML={{ __html: block.configs?.html || "" }}
    //     data-element-type="raw_html"
    //   />
    // );

    default:
      return null;
  }
};

export default RenderBlock;
