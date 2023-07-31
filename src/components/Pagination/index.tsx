const Pagination: React.FC<{
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
  }> = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    const handlePageChange = (newPage: number) => {
      if (newPage > 0 && newPage <= totalPages) {
        onPageChange(newPage);
      }
    };
  
    return (
      <div className="flex justify-center mt-6 mb-2">
        <nav>
          <ul className="pagination flex">
            <li
              onClick={() => handlePageChange(currentPage - 1)}
              className={`pagination-item ${
                currentPage === 1 ? 'disabled cursor-not-allowed' : 'hover:bg-gray-300'
              }`}
            >
              <a
                href="#"
                className={`block p-2 ${
                  currentPage === 1 ? 'opacity-50' : 'cursor-pointer'
                }`}
              >
                &laquo; Previous
              </a>
            </li>
            {[...Array(totalPages)].map((_, index) => (
              <li
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`pagination-item ${
                  currentPage === index + 1 ? 'active bg-blue-500 text-white' : 'hover:bg-blue-200'
                }`}
              >
                <a
                  href="#"
                  className={`block p-2 cursor-pointer ${
                    currentPage === index + 1 ? 'pointer-events-none' : ''
                  }`}
                >
                  {index + 1}
                </a>
              </li>
            ))}
            <li
              onClick={() => handlePageChange(currentPage + 1)}
              className={`pagination-item ${
                currentPage === totalPages ? 'disabled cursor-not-allowed' : 'hover:bg-gray-300'
              }`}
            >
              <a
                href="#"
                className={`block p-2 ${
                  currentPage === totalPages ? 'opacity-50' : 'cursor-pointer'
                }`}
              >
                Next &raquo;
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  };

  export default Pagination