import Icon from "../Icon/Icon"
import "./navbar.css"
import Enlace from "../Enlace/Enlace"
import Search from "../Search/Search"
import CartWidget from "../CartWidget/CartWidget"
import Dropdowns from "../Dropdowns/Dropdowns"

const Navbar = () => {
  return (
    <>
    <section className="background">
    <div className="background barra">
        <div className="navbar">
            <Icon/>
        </div>
        <div className="base2">
            <Search placeholder="Buscar producto"/>
        </div>
        <div className="base">
            <Dropdowns/>
            <div className="drop">
                <Enlace href={"#"} contenido={"Mis compras"}/>
            </div>
            <div className="drop">
                <Enlace href={"#"} contenido={"Ingresa"}/>
            </div>
            <div className="drop">
                <CartWidget className="cartWidget"/>
            </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Navbar
