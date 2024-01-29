import PropTypes from "prop-types"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) => {

  return (
    <>
    <div className="base3">
        <h1 className="text">{greeting}</h1>
        <ItemList/>
    </div>
    </>

  )
}

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
}

export default ItemListContainer

