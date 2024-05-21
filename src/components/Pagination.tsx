import {
  arrowStyle,
  currentPage,
  displayCount,
  totalPages,
} from "../utils/constants";
import paginationHelper from "../utils/paginationHelper";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Pagination = () => {
  const pages = paginationHelper({
    currentPage,
    totalPages,
    displayCount,
  });

  return (
    <div className="mt-10 flex flex-wrap justify-center gap-1 lg:justify-start">
      <span className={arrowStyle}>
        <MdKeyboardArrowLeft />
      </span>
      {pages.map((page, index) => (
        <span
          key={index}
          className={`${arrowStyle} ${
            page === "..."
              ? "hover:bg-transparent hover:text-black cursor-default"
              : ""
          }
          ${page === currentPage ? "bg-red-600 text-white" : ""}`}
        >
          {page === "..." ? page : <button>{page}</button>}
        </span>
      ))}
      <span className={arrowStyle}>
        <MdKeyboardArrowRight />
      </span>
    </div>
  );
};

export default Pagination;
