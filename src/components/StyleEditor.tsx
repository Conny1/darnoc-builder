import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import ContainerStyleEditor from "./stylingEditors/ContainerEditor";
import TextStyleEditor from "./stylingEditors/TextStyleEditor";
import ImageStyleEditor from "./stylingEditors/ImageStyleEditor";
import LinkStyleEditor from "./stylingEditors/LinkStyleEditor";
import ButtonStyleEditor from "./stylingEditors/ButtonStyleEditor";
import { removeBlock } from "@/redux/emailTemplateSlice";
import { X } from "lucide-react";

const StyleEditor = () => {
  const activeBlock = useSelector(
    (state: RootState) => state.email.activeBlock
  );
  const elementType = useSelector(
    (state: RootState) => state.email.currentElementType
  );
  const dispatch = useDispatch();

  return (
    <div className=" overflow-y-scroll w-full flex flex-col items-center max-w-lg bg-white p-4 rounded-xl shadow border space-y-5 text-sm">
      <h3 className="text-base font-semibold text-gray-800">Style Panel</h3>
 {  activeBlock   && <div className="flex  items-center gap-2" >
       <h5 className="text-base font-semibold text-gray-800    ">
        {activeBlock.name} selected
      </h5>
      <button
        className="  hover:bg-red-600 p-1  flex items-center text-white rounded bg-blue-600 cursor-pointer "
        onClick={() =>
          activeBlock?.id ? dispatch(removeBlock(activeBlock?.id)) : null
        }
      >
        <X /> <span>Delete</span>
      </button>
   </div>}

      {elementType === "container" && <ContainerStyleEditor />}
      {elementType === "text" && <TextStyleEditor />}
      {elementType === "image" && <ImageStyleEditor />}
      {elementType === "link" && <LinkStyleEditor />}
      {elementType === "button" && <ButtonStyleEditor />}
    </div>
  );
};

export default StyleEditor;
