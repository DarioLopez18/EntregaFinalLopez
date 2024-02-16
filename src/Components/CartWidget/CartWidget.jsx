import cartIcon from "../../assets/cart.svg"
import "./CartWidget.css"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"

const CartWidget = () => {
  const {totalQuantity} = useContext(CartContext)
  return (
    <>
      <Link to = {"/cart"} className="EnlaceCardWidget">
        <img src={cartIcon} className="iconCart" alt="carritoDeCompras" />
        <p className="pCard">{totalQuantity}</p>
      </Link>
    </>
  )
}
export default CartWidget
