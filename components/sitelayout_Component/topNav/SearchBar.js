import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // Import the search icon

const SearchBar = (props) => {
  return (
    <div className="w-[17vw] h-[48px]  flex justify-center items-center relative">
    <input
      type="text"
      className="w-full h-4/5 bg-white rounded-l-2xl p-2 border border-transparent focus:border-yellow-400 transition duration-300 focus:outline-none focus:shadow-md"
      name="search"
      placeholder="Search your ebooks"
    />
    <button
      className="w-12 h-4/5 absolute top-0 right-0 bg-yellow-400 rounded-r-2xl cursor-pointer focus:outline-none focus:shadow-md"
    >
      <FontAwesomeIcon icon={faSearch} />
    </button>
  </div>
  
  );
};

export default SearchBar;
