import React, { useState } from 'react';
import axios from '../api/axios';

const ProductAutocomplete = ({ onSelectProduct }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      const response = await axios.get(`/products?search=${value}`);
      setSuggestions(response.data);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (product) => {
    onSelectProduct(product);
    setQuery('');
    setSuggestions([]);
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleChange} />
      <ul>
        {suggestions.map((product) => (
          <li key={product.id} onClick={() => handleSelect(product)}>
            {product.name} - {product.price} (Stock: {product.stock})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductAutocomplete;
