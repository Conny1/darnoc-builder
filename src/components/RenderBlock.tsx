import { BlockDataType, BlockType, Droppableids } from "@/types";
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
import { SortableItem } from "./Sortable";

type Props = {
  block: BlockDataType;
};

const RenderBlock = ({ block }: Props): JSX.Element | null => {
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
        <SortableItem id={block.id} >
          <Droppable id={block.id + Droppableids.inline} parent_id={block.id}>
            <div
              data-element-type="container"
              data-element-key="parent"
              className={`    hover:border hover:border-dashed  m-0 p-0 h-fit w-fit  ${
                activeid === block.id ? "border" : null
              } `}
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();

                  setactive((prev) => !prev);
                  dispatch(setActiveBlock(block.id));
                  handleClick(e);
                }}
                style={block.configs?.styles?.parent}
                data-element-type="container"
                data-element-key="parent"
              >
                {block?.blocks && block.blocks.length === 0 ? (
                  <p>Section Container</p>
                ) : (
                  block.blocks?.map((child) => (
                    <RenderBlock key={child.id} block={child} />
                  ))
                )}
              </div>
            </div>
          </Droppable>
        </SortableItem>
      );

    case "column":
      return (
        <SortableItem id={block.id} >
          <Droppable id={block.id + Droppableids.inline} parent_id={block.id}>
            <div
              data-element-type="container"
              data-element-key="column"
              className={` inline-block  align-top hover:border hover:border-dashed  m-0 p-0 p-b h-fit w-fit  ${
                activeid === block.id ? "border" : null
              } `}
            >
              <div
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
                  <RenderBlock key={child.id} block={child} />
                ))}
              </div>
            </div>
          </Droppable>
        </SortableItem>
      );

    case "text":
      return (
        <SortableItem id={block.id} >
          <div
            data-element-type="text"
            data-element-key="text"
            className={` inline-block  align-top hover:border hover:border-dashed  p-0 m-0 text-center  h-fit w-fit  ${
              activeid === block.id ? "border" : null
            } `}
          >
            <div
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
              {block.configs?.content?.text || "text area."}
            </div>
          </div>
        </SortableItem>
      );

    case "image":
      return (
        <SortableItem id={block.id} >
          <div
            data-element-type="text"
            data-element-key="text"
            className={` inline-block  align-top hover:border hover:border-dashed  p-0 m-0 text-center  h-fit w-fit  ${
              activeid === block.id ? "border" : null
            } `}
          >
            <img
              onClick={(e) => {
                e.stopPropagation();
                setactive((prev) => !prev);
                dispatch(setActiveBlock(block.id));
                handleClick(e);
              }}
              src={
                block.configs?.content?.link || "https://placehold.co/200x100"
              }
              alt={block.configs?.content?.text || ""}
              style={block.configs?.styles?.image}
              data-element-type="image"
              data-element-key="image"
            />
          </div>
        </SortableItem>
      );

    case "button":
      return (
        <SortableItem id={block.id} >
          <div
            data-element-type="button"
            data-element-key="button"
            className={` inline-block  align-top  hover:border hover:border-dashed  m-0 p-0 h-fit w-fit  ${
              activeid === block.id ? "border" : null
            } `}
          >
            <a
              onClick={(e) => {
                e.stopPropagation();

                setactive((prev) => !prev);
                dispatch(setActiveBlock(block.id));
                handleClick(e);
              }}
              href={block.configs?.content?.link || "#"}
              style={block.configs?.styles?.button}
              data-element-type="button"
              data-element-key="button"
            >
              {block.configs?.content?.text || "Click me"}
            </a>
          </div>
        </SortableItem>
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
