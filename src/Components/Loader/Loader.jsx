import "./Loader.css"
import PropTypes from "prop-types"

const Loader = ({text}) => {
  return (
      <div className="divLoader"><h1>{text}</h1> <span className="loader"></span></div>
  )
}

Loader.propTypes = {
    text: PropTypes.string.isRequired
}

export default Loader
