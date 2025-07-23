import { removeInlineBlock } from "@/redux/emailTemplateSlice";
import { BlockDataType } from "@/types";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ResizeComponent from "./ResizeComponent";
import TextEditor from "./TextEditor";
import { SortableItem } from "./Sortable";

type Props = {
  item: BlockDataType;
  parent_id: string;
};
const RenderInlineBlock = ({ item, parent_id }: Props) => {
  const [closeBTN, setcloseBTN] = useState(false);

  const dispatch = useDispatch();
  let block;
  let measurements = {
    width: 576,
    height: 200,
    minConstraints: { x: 100, y: 100 },
    maxConstraints: { x: 1000, y: 1000 },
  };

  switch (item.name) {
    case "text":
      (measurements = {
        width: 400,
        height: 70,
        minConstraints: { x: 100, y: 80 },
        maxConstraints: { x: 800, y: 600 },
      }),
        (block = <TextEditor element=" <p >  Default text</p>" />);
      break;
    case "button":
      measurements = {
        width: 70,
        height: 40,
        minConstraints: { x: 40, y: 20 },
        maxConstraints: { x: 400, y: 200 },
      };
      block = (
        <div
          key={item.name}
          className=" flex flex-1  items-center justify-center  bg-blue-600 hover:bg-blue-700"
        >
          <a
            href="#"
            className="inline-block text-white text-sm font-semibold px-4 py-2 rounded"
          >
            {item.name || "Click Me"}
          </a>
        </div>
      );
      break;
    case "image":
      (measurements = {
        width: 300,
        height: 200,
        minConstraints: { x: 100, y: 100 },
        maxConstraints: { x: 700, y: 500 },
      }),
        (block = (
          <div key={item.name} className=" relative py-2 ">
            <img
              src={"https://via.placeholder.com/600x200"}
              alt="image block"
              className="w-full rounded"
            />
          </div>
        ));
      break;
    case "section":
      measurements = {
        width: 257,
        height: 100,
        minConstraints: { x: 50, y: 50 },
        maxConstraints: { x: 800, y: 400 },
      };
      block = (
        <div key={item.name} className="relative p-4  rounded my-2 ">
          <p>Section block</p>
        </div>
      );
      break;
    default:
      return null;
  }

  return (
    <SortableItem id={item.id} isParent={false} parent_id={parent_id}>
      <ResizeComponent
        tailwindStyles="p-0 relative  mx-auto bg-white shadow rounded overflow-hidden hover:border hover:border-dashed "
        styles={measurements}
      >
        <div
          onMouseOver={() => setcloseBTN(true)}
          onMouseLeave={() => setcloseBTN(false)}
          className="relative flex flex-col w-full h-full"
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
    </SortableItem>
  );
};

export default RenderInlineBlock;
