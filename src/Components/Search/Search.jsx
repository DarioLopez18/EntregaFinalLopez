import "./search.css"
import PropTypes from "prop-types"
import iconSearch from "../../assets/search.svg";
import { useState } from "react";

const Search = ({placeholder,productsCopy, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const searchResults = productsCopy.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onSearch(searchResults);
  }
  return (
        <>
        <input className="input" type="text" name="search" id="search" placeholder={placeholder} onChange={handleChange}/>
        <button style={{background:'none',border:'none'}} onClick={handleSearch}>
          <img src={iconSearch} alt="iconoDeBuscar" />
        </button>
        </>
  )
}

Search.propTypes = {
    placeholder: PropTypes.string.isRequired,
}


export default Search
