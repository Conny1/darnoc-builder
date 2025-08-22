"use client";

export default function ComingSoon() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 text-center px-4">
      <h1 className="text-5xl font-bold text-blue-700 mb-4">🚧 Coming Soon</h1>
      <p className="text-lg text-gray-600 mb-8">
        We’re working hard to launch this page. Stay tuned!
      </p>

      <button
        onClick={() => window.history.back()}
        className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow-md 
                   hover:bg-blue-700 active:scale-95 transition cursor-pointer "
      >
        ⬅ Return to Previous Page
      </button>
    </div>
  );
}
