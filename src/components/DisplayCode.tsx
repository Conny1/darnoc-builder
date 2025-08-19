"use client";

function DisplayCode({code}:{code:string}) {



  return (
    <div className=" text-white p-4 rounded-lg  overflow-x-auto bg-[#1e1e1e] w-full max-w-[800px] h-full ">
      <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
        {code}
      </pre>
    </div>
  );
}

export default DisplayCode;
