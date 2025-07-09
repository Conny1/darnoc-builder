import { removeInlineBlock } from "@/redux/emailTemplateSlice";
import { BlockDataType } from "@/types";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

type Props = {
  item: BlockDataType;
  parent_id: string;
};
const RenderInlineBlock = ({ item, parent_id }: Props) => {
  const [closeBTN, setcloseBTN] = useState(false);

  const dispatch = useDispatch();

  switch (item.name) {
    case "text":
      return (
        <p
          onMouseOver={() => setcloseBTN(true)}
          onMouseLeave={() => setcloseBTN(false)}
          key={item.name}
          className=" relative text-gray-700 text-base p-2 hover:border hover:border-dashed"
        >
          <button
            className={` ${
              !closeBTN ? "hidden" : null
            }  absolute top-2 right-2 text-white bg-black hover:bg-red-600 p-1 rounded-full text-xs  `}
            onClick={() =>
              dispatch(removeInlineBlock({ parent_id, block_id: item.id }))
            }
          >
            ✕
          </button>
          {item.name || "Default text"}
        </p>
      );

    case "button":
      return (
        <div
          onMouseOver={() => setcloseBTN(true)}
          onMouseLeave={() => setcloseBTN(false)}
          key={item.name}
          className=" relative text-center py-2 hover:border hover:border-dashed"
        >
          <button
            className={` ${
              !closeBTN ? "hidden" : null
            }  absolute top-2 right-2 text-white bg-black hover:bg-red-600 p-1 rounded-full text-xs  `}
            onClick={() =>
              dispatch(removeInlineBlock({ parent_id, block_id: item.id }))
            }
          >
            ✕
          </button>
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded"
          >
            {item.name || "Click Me"}
          </a>
        </div>
      );

    case "image":
      return (
        <div
          onMouseOver={() => setcloseBTN(true)}
          onMouseLeave={() => setcloseBTN(false)}
          key={item.name}
          className=" relative py-2 hover:border hover:border-dashed"
        >
          <button
            className={` ${
              !closeBTN ? "hidden" : null
            }  absolute top-2 right-2 text-white bg-black hover:bg-red-600 p-1 rounded-full text-xs  `}
            onClick={() =>
              dispatch(removeInlineBlock({ parent_id, block_id: item.id }))
            }
          >
            ✕
          </button>
          <img
            src={"https://via.placeholder.com/600x200"}
            alt="image block"
            className="w-full rounded"
          />
        </div>
      );

    case "section":
      return (
        <div
          onMouseOver={() => setcloseBTN(true)}
          onMouseLeave={() => setcloseBTN(false)}
          key={item.name}
          className="relative bg-gray-50 p-4  rounded my-2 hover:border hover:border-dashed"
        >
          <button
            className={` ${
              !closeBTN ? "hidden" : null
            }  absolute top-2 right-2 text-white bg-black hover:bg-red-600 p-1 rounded-full text-xs  `}
            onClick={() =>
              dispatch(removeInlineBlock({ parent_id, block_id: item.id }))
            }
          >
            ✕
          </button>
          <p>Section block</p>
        </div>
      );

    default:
      return null;
  }
};

export default RenderInlineBlock;
