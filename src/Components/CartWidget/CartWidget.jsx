import cartIcon from "../../assets/cart.svg"
import "./CartWidget.css"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const CartWidget = () => {
  const {totalQuantity} = useContext(CartContext)
  return (
    <>
      <Link to = {"/cart"} className="EnlaceCardWidget">
        <img src={cartIcon} className="iconCart" alt="carritoDeCompras" />
        {totalQuantity == 0 ? <p></p> : <p className="pCard">{totalQuantity}</p>}
      </Link>
    </>
  )
}
export default CartWidget
