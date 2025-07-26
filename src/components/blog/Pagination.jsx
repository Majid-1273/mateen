// Pagination Component

import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      <button 
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="flex items-center justify-center h-10 w-10 rounded-full border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
      >
        <ChevronLeft size={18} />
      </button>
      
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`flex items-center justify-center h-10 w-10 rounded-full ${
            currentPage === page 
            ? 'bg-blue-800 text-white' 
            : 'border border-gray-300 hover:bg-gray-100'
          }`}
        >
          {page}
        </button>
      ))}
      
      <button 
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center h-10 w-10 rounded-full border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}