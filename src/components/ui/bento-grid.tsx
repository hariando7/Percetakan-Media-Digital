import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4); // Default untuk desktop

  useEffect(() => {
    const updateItemsPerPage = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      setItemsPerPage(isMobile ? 4 : 4); // 4 item untuk mobile, 8 untuk desktop
    };

    // Jalankan saat komponen dimuat
    updateItemsPerPage();

    // Tambahkan event listener untuk perubahan ukuran layar
    window.addEventListener("resize", updateItemsPerPage);

    // Bersihkan listener saat komponen dilepas
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalItems = React.Children.count(children);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = React.Children.toArray(children).slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    // awal
    <div className="">
      <div
        className={cn(
          "grid md:auto-rows-[16rem] grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto md:h-[400px]",
          className
        )}
      >
        {displayedItems}
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => {
            if (currentPage === 1) {
              alert("Anda sudah berada di halaman pertama.");
            } else {
              handlePrevPage();
            }
          }}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "border-secondary bg-secondary text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
          }`}
        >
          Kembali
        </button>

        <span className="flex m-auto justify-center items-center text-primary font-bold hover:text-secondary text-xs sm:text-sm md:text-base">
          {`Page ${currentPage} of ${totalPages}`}
        </span>

        <button
          onClick={() => {
            if (currentPage === totalPages) {
              alert("Anda sudah berada di halaman terakhir.");
            } else {
              handleNextPage();
            }
          }}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md border transition duration-200 text-sm sm:text-base md:text-lg ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "border-secondary bg-secondary text-secondary-foreground hover:shadow-[4px_4px_0px_0px_#06264d] cursor-pointer"
          }`}
        >
          Selanjutnya
        </button>
      </div>
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
}: // icon,
{
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  // icon?: React.ReactNode;
}) => {
  return (
    // Style gambar card
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-2xl transition duration-200 hover:shadow-secondary p-4 bg-white border-2 border-primary hover:border-secondary justify-between flex flex-col space-y-4 h-[550px] md:h-[400px]",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {/* {icon} */}
        <div className="font-sans font-bold text-primary mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
