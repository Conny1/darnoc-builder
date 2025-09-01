"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Templates = () => {
  const router = useRouter();

  const templateList = [
    { id: 1, name: "Newsletter", preview: "https://placehold.co/300x200" },
    { id: 2, name: "Welcome Email", preview: "https://placehold.co/300x200" },
    { id: 3, name: "Product Launch", preview: "https://placehold.co/300x200" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Top Bar with Back Button */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => router.back()}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
        >
          ← Previous
        </button>
        <h1 className="text-3xl font-bold text-gray-800">Email Templates</h1>
        <div></div> {/* placeholder for spacing */}
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {templateList.map((template) => (
          <div
            key={template.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
          >
            <img
              src={template.preview}
              alt={template.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-700">{template.name}</h2>
              <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Use Template
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
