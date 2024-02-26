import Icon from "../Icon/Icon"
import "./navbar.css"
import Search from "../Search/Search"
import CartWidget from "../CartWidget/CartWidget"
import Dropdowns from "../Dropdowns/Dropdowns"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { NavLink, useLocation } from "react-router-dom"

const Navbar = () => {
  const {totalQuantity} = useContext(CartContext)
  const location = useLocation();
  const showHomeLink = location.pathname !== '/';
  return (
    <>
    <div className="position">
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
                {showHomeLink && (
                    <NavLink to={"/"} className="enlaceNavbar">
                        Inicio
                    </NavLink>
                )}
                {totalQuantity != 0  ?
                    <div className="drop">
                        <CartWidget className="cartWidget"/>
                    </div>
                    :
                    <></>
                }
            </div>
        </div>
        </section>
        </div>
    </>
  )
}

export default Navbar
