import React, { useState } from 'react';
import './Search.css';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('검색어 제출:', searchTerm);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit(e);
    }
  };

  return (
    <div className="SearchContainer">
      <div className="div-top">
        <span className="span-search">검색</span>
      </div>
      <div className='div-input'>
        <form onSubmit={handleSearchSubmit} className='search-flex'>
          <input
            className='search-box'
            type='text'
            placeholder='검색'
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown} // 엔터 키로 검색어 제출
          />
          <button type="submit" className="search-button">검색</button>
        </form>
      </div>
    </div>
  );
}

export default Search;
