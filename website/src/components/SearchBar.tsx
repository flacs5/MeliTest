import React, { useState } from "react";
import iconSearch from "../img/icon_search.png";
import { useNavigate } from "react-router-dom";

const SearchBar: React.FC = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="searchbar">
      <input
        type="text"
        name="search"
        placeholder="Nunca dejes de buscar"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={() => {}}
      />
      <button
        onClick={() => {
          navigate(`/items?q=${inputValue}`);
        }}
      >
        <img src={iconSearch} alt="" />
      </button>
    </div>
  );
};

export default SearchBar;
