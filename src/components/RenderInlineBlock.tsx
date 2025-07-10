import { removeInlineBlock } from "@/redux/emailTemplateSlice";
import { BlockDataType } from "@/types";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ResizeComponent from "./ResizeComponent";

type Props = {
  item: BlockDataType;
  parent_id: string;
};
const RenderInlineBlock = ({ item, parent_id }: Props) => {
  const [closeBTN, setcloseBTN] = useState(false);

  const dispatch = useDispatch();
  let block;

  switch (item.name) {
    case "text":
      block = (
        <p
          onMouseOver={() => setcloseBTN(true)}
          onMouseLeave={() => setcloseBTN(false)}
          key={item.name}
          className=" relative text-gray-700 text-base p-2 "
        >
          {item.name || "Default text"}
        </p>
      );
      break;
    case "button":
      block = (
        <div
          onMouseOver={() => setcloseBTN(true)}
          onMouseLeave={() => setcloseBTN(false)}
          key={item.name}
          className=" relative text-center py-2 "
        >
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded"
          >
            {item.name || "Click Me"}
          </a>
        </div>
      );
      break;
    case "image":
      block = (
        <div
          onMouseOver={() => setcloseBTN(true)}
          onMouseLeave={() => setcloseBTN(false)}
          key={item.name}
          className=" relative py-2 "
        >
          <img
            src={"https://via.placeholder.com/600x200"}
            alt="image block"
            className="w-full rounded"
          />
        </div>
      );
      break;
    case "section":
      block = (
        <div
          onMouseOver={() => setcloseBTN(true)}
          onMouseLeave={() => setcloseBTN(false)}
          key={item.name}
          className="relative bg-gray-50 p-4  rounded my-2 "
        >
          <p>Section block</p>
        </div>
      );
      break;
    default:
      return null;
  }

  return (
    <ResizeComponent
      tailwindStyles="p-0 relative  mx-auto bg-white shadow rounded overflow-hidden hover:border hover:border-dashed "
      styles={{
        width: 257,
        height: 100,
        minConstraints: { x: 100, y: 100 },
        maxConstraints: { x: 1000, y: 1000 },
      }}
    >
      <div
        onMouseOver={() => setcloseBTN(true)}
        onMouseLeave={() => setcloseBTN(false)}
        className="m-0  "
      >
        <button
          className={` ${
            !closeBTN ? "hidden" : null
          }  absolute top-2 right-2 text-white bg-black hover:bg-red-600 p-1 rounded-full text-xs z-50  `}
          onClick={() =>
            dispatch(removeInlineBlock({ parent_id, block_id: item.id }))
          }
        >
          ✕
        </button>
        {block}
      </div>
    </ResizeComponent>
  );
};

export default RenderInlineBlock;
