import cartIcon from "../../assets/cart.svg"
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <>
        <img src={cartIcon} className="iconCart" alt="carritoDeCompras" />
        <p>1</p>
    </>
  )
}
export default CartWidget
