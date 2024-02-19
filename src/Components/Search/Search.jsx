import "./search.css"
import PropTypes from "prop-types"
import iconSearch from "../../assets/search.svg";

const Search = ({placeholder}) => {
  return (
        <>
        <input className="input" type="text" name="search" id="search" placeholder={placeholder} />
        <img src={iconSearch} alt="iconoDeBuscar" />
        </>
  )
}

Search.propTypes = {
    placeholder: PropTypes.string.isRequired,
}


export default Search
