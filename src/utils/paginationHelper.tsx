interface PaginationProps {
  currentPage: number;
  totalPages: number;
  displayCount: number;
}

const paginationHelper = ({
  currentPage,
  totalPages,
  displayCount,
}: PaginationProps) => {
  const pages: (number | string)[] = [];

  if (totalPages <= displayCount) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    const start = Math.max(1, currentPage - Math.floor(displayCount / 2));
    const end = Math.min(totalPages, start + displayCount - 1);

    if (start > 2) {
      pages.push(1, 2);
      if (start > 3) {
        pages.push("...");
      }
    } else {
      for (let i = 1; i < start; i++) {
        pages.push(i);
      }
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) {
      if (end < totalPages - 2) {
        pages.push("...");
      }
      pages.push(totalPages - 1, totalPages);
    } else {
      for (let i = end + 1; i <= totalPages; i++) {
        pages.push(i);
      }
    }
  }

  return pages;
};

export default paginationHelper;
