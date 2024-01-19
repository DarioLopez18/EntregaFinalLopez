import PropTypes from "prop-types"
import "./enlace.css"

const Enlace = (props) => {
  return (
    <a className="enlace" href={props.href}>{props.contenido}</a>
  )
}

Enlace.propTypes = {
    href: PropTypes.string.isRequired,
    contenido: PropTypes.string.isRequired,
}

export default Enlace
