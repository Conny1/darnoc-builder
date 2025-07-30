import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import ContainerStyleEditor from "./stylingEditors/ContainerEditor";
import TextStyleEditor from "./stylingEditors/TextStyleEditor";
import ImageStyleEditor from "./stylingEditors/ImageStyleEditor";
import LinkStyleEditor from "./stylingEditors/LinkStyleEditor";
import ButtonStyleEditor from "./stylingEditors/ButtonStyleEditor";

const StyleEditor = () => {
  const activeBlock = useSelector(
    (state: RootState) => state.email.activeBlock
  );
  const elementType = useSelector(
    (state: RootState) => state.email.currentElementType
  );

  return (
    <div className=" overflow-y-scroll w-full max-w-sm bg-white p-4 rounded-xl shadow border space-y-5 text-sm">
      <h3 className="text-base font-semibold text-gray-800">Style Panel</h3>
      <h5 className="text-base font-semibold text-gray-800 uppercase ">
        {activeBlock?.name} {elementType} selected
      </h5>

      {elementType === "container" && <ContainerStyleEditor />}
      {elementType === "text" && <TextStyleEditor />}
      {elementType === "image" && <ImageStyleEditor />}
      {elementType === "link" && <LinkStyleEditor />}
      {elementType === "button" && <ButtonStyleEditor />}
    </div>
  );
};

export default StyleEditor;
