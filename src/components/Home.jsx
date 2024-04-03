import React, { useState } from 'react';
import CustomSearchBar from './SearchBar'; 

export function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchFunction = (searchValue) => {
    setSearchTerm(searchValue);

  };

  return (
    <div>

      <CustomSearchBar onSearch={handleSearchFunction} />
    
    </div>
  );
}

export default Home;