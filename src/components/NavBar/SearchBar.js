import React, { useState } from "react";

const SearchBar = ({ searchTerm, handleSearch }) => {

  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        className="navBar-search"
        placeholder="Search for products, brands and more"
      />
    </>
  );
};

export default SearchBar;
