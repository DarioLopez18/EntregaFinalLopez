import PropTypes from "prop-types"
import "./enlace.css"

const Enlace = ({href,contenido}) => {
  return (
    <a className="enlace" href={href}>{contenido}</a>
  )
}

Enlace.propTypes = {
    href: PropTypes.string.isRequired,
    contenido: PropTypes.string.isRequired,
}

export default Enlace
