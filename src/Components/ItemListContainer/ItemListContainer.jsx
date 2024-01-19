import PropTypes from "prop-types"
import "./ItemListContainer.css"

const ItemListContainer = (props) => {
  return (
    <div className="base3">
        <h1 className="text">{props.greeting}</h1>
    </div>
  )
}

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
}

export default ItemListContainer
