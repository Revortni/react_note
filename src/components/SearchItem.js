import React from 'react';
import './styles/SearchItem.css';
const SearchItem = props => {
  const handleSearch = e => {
    let val = e.target.value;
    props.handleSearchItem(val);
  };

  return (
    <div className='container'>
      <div className='search_item'>
        <input
          type='text'
          name='item'
          onChange={handleSearch}
          placeholder='Search'
        />
      </div>
    </div>
  );
};

export default SearchItem;
