import ecommerceIcon from "../../assets/icon.svg"
import "./icon.css"
import { Link } from "react-router-dom"
const Icon = () => {
  return (

      <Link to={"/"} className="icon ">
       <img src={ecommerceIcon} className="logo" alt="Ecommerce Icon" />
       <h1 className="textoPrincipal">Ecommerce React JS</h1>
      </Link>    
  )
}

export default Icon
