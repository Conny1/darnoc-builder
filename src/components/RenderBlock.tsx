import { BlockDataType, Droppableids } from "@/types";
import React, { JSX } from "react";
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
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

type Props = {
  block: BlockDataType;
  parent_id?: string;
};

const RenderBlock = ({ block, parent_id }: Props): JSX.Element | null => {
  const dispatch = useDispatch();
  const activeid = useSelector(
    (state: RootState) => state.email.activeBlock?.id
  );

  const handleClick = (e: React.MouseEvent) => {
    const elementType = (e.target as HTMLElement).getAttribute(
      "data-element-type"
    );
    const elementKey = (e.target as HTMLElement).getAttribute(
      "data-element-key"
    );

    dispatch(setcurrentElementType(elementType as string));
    dispatch(setcurrentElementKey(elementKey as string));
  };

  switch (block.name) {
    case "section":
      return (
        <Droppable id={block.id + Droppableids.inline} parent_id={block.id}>
          <SortableItem id={block.id} parent_id={parent_id}>
            <div
              onClick={(e) => {
                e.stopPropagation();
                dispatch(setActiveBlock(block.id));
                handleClick(e);
              }}
              data-element-type="container"
              data-element-key="parent"
              className={`  removable  hover:border hover:border-dashed  m-0 p-0 h-fit w-full    ${
                activeid === block.id ? "border" : null
              } `}
            >
              <div
                style={block.configs?.styles?.parent}
                data-element-type="container"
                data-element-key="parent"
              >
                <SortableContext
                  items={block.blocks || []}
                  strategy={verticalListSortingStrategy}
                >
                  {block?.blocks && block.blocks.length === 0 ? (
                    <p>Section Container</p>
                  ) : (
                    block.blocks?.map((child) => (
                      <RenderBlock
                        key={child.id}
                        block={child}
                        parent_id={block.id}
                      />
                    ))
                  )}
                </SortableContext>
              </div>
            </div>
          </SortableItem>
        </Droppable>
      );

    case "column":
      return (
        <div
          style={block.configs?.styles?.parent}
          data-element-type="container"
          data-element-key="column"
          className={`hover:border hover:border-dashed    ${
            activeid === block.id ? "border" : null
          } `}
        >
          <Droppable id={block.id + Droppableids.inline} parent_id={block.id}>
            <SortableItem id={block.id} parent_id={parent_id}>
              <div
                onClick={(e) => {
                  e.stopPropagation();

                  dispatch(setActiveBlock(block.id));
                  handleClick(e);
                }}
                style={block.configs?.styles?.column}
                data-element-type="container"
                data-element-key="column"
              >
                <SortableContext
                   
                  items={block.blocks || []}
                  strategy={verticalListSortingStrategy}
                >
                  {block.blocks?.map((child) => (
                    <RenderBlock
                      key={child.id}
                      block={child}
                      parent_id={block.id}
                    />
                  ))}
                </SortableContext>
              </div>
            </SortableItem>
          </Droppable>
        </div>
      );

    case "text":
      return (
        <div
          style={block.configs?.styles?.parent}
          data-element-type="text"
          data-element-key="text"
          className={`align-top hover:border hover:border-dashed   ${
            activeid === block.id ? "border" : null
          } `}
        >
          <SortableItem id={block.id} parent_id={parent_id}>
            <div
              onClick={(e) => {
                e.stopPropagation();

                dispatch(setActiveBlock(block.id));
                handleClick(e);
              }}
              style={block.configs?.styles?.text}
              data-element-type="text"
              data-element-key="text"
            >
              {block.configs?.content?.text || "text area."}
            </div>
          </SortableItem>
        </div>
      );

    case "image":
      return (
        <div
          style={block.configs?.styles?.parent}
          data-element-type="image"
          data-element-key="image"
          className={` hover:border hover:border-dashed   ${
            activeid === block.id ? "border" : null
          } `}
        >
          <SortableItem id={block.id} parent_id={parent_id}>
            <img
              onClick={(e) => {
                e.stopPropagation();
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
          </SortableItem>
        </div>
      );

    case "button":
      return (
        <div
          style={block.configs?.styles?.parent}
          data-element-type="button"
          data-element-key="button"
          className={` hover:border hover:border-dashed  ${
            activeid === block.id ? "border" : null
          } `}
        >
          <SortableItem id={block.id} parent_id={parent_id}>
            <a
              onClick={(e) => {
                e.stopPropagation();

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
          </SortableItem>
        </div>
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
