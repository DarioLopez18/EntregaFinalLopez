import cartIcon from "../../assets/cart.svg"
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <>
      <a href="#" className="EnlaceCardWidget">
        <img src={cartIcon} className="iconCart" alt="carritoDeCompras" />
        <p className="pCard">1</p>
      </a>
    </>
  )
}
export default CartWidget
