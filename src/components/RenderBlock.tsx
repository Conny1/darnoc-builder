import { BlockDataType, BlockType } from "@/types";
import React, { JSX, useEffect } from "react";
import Droppable from "./Droppable";

type Props = {
  block: BlockDataType;
};

const RenderBlock = ({ block }: Props): JSX.Element | null => {
  switch (block.name) {
    case "section":
      return (
        <Droppable id="sectionDroppable" parent_id={block.id}>
          <div
            style={block.configs?.styles?.parent}
            data-element-type="container"
            data-element-key="parent"
          >
            {block.blocks?.map((child) => (
              <RenderBlock key={child.id} block={child} />
            ))}
          </div>
        </Droppable>
      );

    case "column":
      return (
        <div
          style={block.configs?.styles?.column}
          data-element-type="column"
          data-element-key="column"
        >
          {block.blocks?.map((child) => (
            <RenderBlock key={child.id} block={child} />
          ))}
        </div>
      );

    case "text":
      return (
        <div
          style={block.configs?.styles?.wrapper}
          data-element-type="text"
          data-element-key={block.configs?.key || "text"}
        >
          {block.configs?.content || ""}
        </div>
      );

    case "image":
      return (
        <img
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
          href={block.configs?.href || "#"}
          style={block.configs?.styles?.button}
          data-element-type="link"
          data-element-key="button"
        >
          {block.configs?.content || "Click"}
        </a>
      );

    case "divider":
      return (
        <div
          style={
            block.configs?.styles?.divider || {
              height: "1px",
              margin: "16px 0",
              backgroundColor: "#e0e0e0",
            }
          }
          data-element-type="divider"
          data-element-key="divider"
        />
      );

    case "table":
      return (
        <table style={block.configs?.styles?.table} data-element-type="table">
          {block.configs?.header && (
            <thead style={block.configs?.styles?.thead}>
              <tr>
                {block.configs.header.map((h: string, i: number) => (
                  <th key={i} style={block.configs?.styles?.th}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {(block.configs?.rows || []).map((row: [string], ri: number) => (
              <tr
                key={ri}
                style={
                  ri % 2 === 1
                    ? block.configs?.styles?.altRow
                    : block.configs?.styles?.row
                }
              >
                {row?.map((cell: string, ci: number) => (
                  <td key={ci} style={block.configs?.styles?.td}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );

    case "raw_html":
      return (
        <div
          dangerouslySetInnerHTML={{ __html: block.configs?.html || "" }}
          data-element-type="raw_html"
        />
      );

    default:
      return null;
  }
};

export default RenderBlock;
