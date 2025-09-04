"use client";
import React, { useMemo } from "react";
import { useRouter } from "next/navigation";
import { templates } from "../../../lib/templates";
import RenderTemplate from "@/components/RenderTemplate";
import { useDispatch } from "react-redux";
import { setTemplate } from "@/redux/emailTemplateSlice";

const Templates = () => {
  const router = useRouter();
  const templatesArr = useMemo(() => templates, []);
  const dispatch = useDispatch();
const route = useRouter()
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Top Bar with Back Button */}
      <div className="flex items-center justify-between mb-10">
        <button
          onClick={() => router.back()}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
        >
          ← Previous
        </button>
        <h1 className="text-3xl font-extrabold text-gray-800">
          Email Templates
        </h1>
        <div /> {/* keeps spacing consistent */}
      </div>

      <div className="flex flex-wrap ">
        {templatesArr.map((item) => (
          <div
            key={item.id}
            className=" scale-75 origin-top-left   bg-white  shadow-md rounded-xl p-5 flex flex-col gap-4 hover:shadow-lg transition"
          >
            {/* Template Title */}
            <h2 className="text-lg font-semibold text-gray-700 border-b pb-2 capitalize ">
              {item.name}
            </h2>

            {/* Template Preview */}
            <div className="flex flex-wrap gap-3 justify-center">
              <RenderTemplate dropableData={item.data} />
            </div>

            {/* Action Button (optional for future use) */}
            <button 
            onClick={()=>{
              dispatch(setTemplate(item.data  ))
              route.push("/email/dashboard")
            }}
            className="w-full mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Use Template
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
