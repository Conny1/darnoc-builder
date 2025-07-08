import { BlockType } from "@/types";
import { useEffect } from "react";

const RenderInlineBlock = ({ item }: { item: BlockType }) => {
  switch (item) {
    case "text":
      return (
        <p key={item} className="text-gray-700 text-base p-2">
          {item || "Default text"}
        </p>
      );

    case "button":
      return (
        <div key={item} className="text-center py-2">
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded"
          >
            {item || "Click Me"}
          </a>
        </div>
      );

    case "image":
      return (
        <div key={item} className="py-2">
          <img
            src={"https://via.placeholder.com/600x200"}
            alt="email block"
            className="w-full rounded"
          />
        </div>
      );

    case "section":
      return (
        <div key={item} className="bg-gray-50 p-4 border rounded my-2">
          <p>Section block</p>
        </div>
      );

    default:
      return <p className="text-red-500">Unknown block type</p>;
  }
};

export default RenderInlineBlock;
