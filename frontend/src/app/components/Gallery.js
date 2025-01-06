import React from "react";

export default function Gallery() {
  return (
    <div className="px-5 md:px-16 xl-32 overflow-hidden ">
      <div className="gallerygrid h-[80vh] grid grid-cols-3 p-5 gap-2">
        <div className="bg-[url('/img/gallery/gallery1.webp')] bg-cover bg-center rounded-md"></div>

        <div className="flex flex-col h-full gap-2">
          <div className="h-[50%] bg-[url('/img/gallery/gallery3.webp')] bg-cover bg-center rounded-md"></div>
          <div className="h-[50%] bg-[url('/img/gallery/gallery2.webp')] bg-cover bg-center rounded-md"></div>
        </div>

        <div className="bg-[url('/img/gallery/gallery4.webp')] bg-cover bg-center rounded-md"></div>
      </div>
    </div>
  );
}
