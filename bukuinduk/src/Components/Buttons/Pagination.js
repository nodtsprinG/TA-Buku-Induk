import React from "react";
const Pagination = ({ totalPage, currentPage, onPageChange }) => {
    const pages = Array.from({ length: totalPage }, (_, i) => i + 1)
    return (
        <div>
            {pages.map((page) => {
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-3 py-1 border rounded-md text-black font-bold font-Quicksand ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
                        }`}
                >
                    {page}
                </button>
            })}
        </div>
    )

}
export default Pagination;