import "./search.css"
import PropTypes from "prop-types"
import iconSearch from "../../assets/search.svg";
import { useState } from "react";

const Search = ({placeholder}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    console.log(event.target.value)
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    
  };
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
