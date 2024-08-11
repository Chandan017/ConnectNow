import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="flex-center h-screen w-full flex-col">
      <Image
        src="/icons/loading-circle.svg"
        alt="Loading"
        width={50}
        height={50}
      />
      <h1 className="text-white text-2xl font-bold">Hold on</h1>
    </div>
  );
};

export default Loader;
