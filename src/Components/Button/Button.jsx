import PropTypes from "prop-types"
import "./Button.css"

const Button = ({detail,onClick}) => {
  return (
    <>
        <button className="button" onClick={onClick}>{detail}</button>
    </>
  )
}

Button.propTypes = {
    detail: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button
