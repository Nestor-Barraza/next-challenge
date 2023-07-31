/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import React, { useState, useEffect, ChangeEvent, Key } from 'react';
import { useSelector } from 'react-redux';
import { fetchProducts } from '../actions';
import { RootState } from '../store/types';
import { SearchBar, Pagination } from '../components';



const ProductList: React.FC = () => {
  const { products, status, error } = useSelector((state: RootState) => state.product);

  // Local state for pagination
  const [page, setPage] = useState(1);
  const productsPerPage = 10;

  // Local state for sorting
  const [sortBy, setSortBy] = useState('');

  // Local state for search term
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle pagination change
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  // Function to handle sorting criteria change
  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  // Function to handle search term change
  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    fetchProducts()
  }, []);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  // Filter and sort products based on local states
  let sortedProducts = products;
  if (sortBy) {
    sortedProducts = sortedProducts.slice().sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
  }

  // Filter products based on search term
  if (searchTerm) {
    sortedProducts = sortedProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // Paginate products
  const paginatedProducts = sortedProducts.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );

  return (
    <>
      <div className="flex justify-center mt-4">
        <div className="flex items-center">
          <SearchBar onSearchChange={handleSearchChange} />
          <label className="ml-4 mt-4">Sort by: </label>
          <select
            onChange={handleSortChange}
            className="w-80 ml-5 mt-5 p-3 pr-10 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">None</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>

        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {paginatedProducts.map(
          (product: {
            id: Key | null | undefined;
            title: string;
            description: string;
            price: string | number;
            currency: string;
            rating: string | number;
            image: string | undefined;
          }) => (
            <div key={product.id} className="p-4 border rounded shadow-md">
              <img
                src={product.image}
                alt={product.title || ''}
                className="w-40 h-40 object-contain mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-green-600 text-lg font-semibold">
                Price: {product.price} {product.currency}
              </p>
              <p className="text-yellow-600">Rating: {product.rating}</p>
            </div>
          )
        )}
      </div>

      <Pagination
        totalItems={sortedProducts.length}
        itemsPerPage={productsPerPage}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default ProductList;
