import { UsersResponse } from '../types/types';
import "tailwindcss";

interface PaginationProps {
  data: UsersResponse;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ data, onPageChange }: PaginationProps) => {
  const { page, total_pages } = data;

  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 bg-primary-500 text-red rounded disabled:bg-black-300 disabled:cursor-not-allowed"
      >
        Previous
      </button>
      <span className="px-4 py-2 bg-gray-100 rounded">
        Page {page} of {total_pages}
      </span>
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === total_pages}
        className="px-4 py-2 bg-primary-500 text-red rounded disabled:bg-black-300 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};