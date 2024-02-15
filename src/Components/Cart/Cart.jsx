import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./Cart.css"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
  const {totalQuantity,cart,clearCart,total} = useContext(CartContext)
  return (
    <div className="contenedor_general">
      {totalQuantity == 0 ? 
      <div className="carritoVacio">
        <h1 className="text">¡Tu carrito de compras está vacio!</h1>
        <Link className="viewProducts" to = {"/"}>
          Ver productos
        </Link>
      </div> : 
      <>
        <div className="cartContainer">
          {cart.map(p=>
            (
              <CartItem key={p.product.id} product={p.product} quantity = {p.quantity}/>
            )
          )
          }
        </div>
        <div className="containerButtonClear">
          <button className="buttonClear" onClick={clearCart}>Vaciar el carrito</button>
          <h1 className="totalCart">Total del carrito: ${total}</h1>
          <button className="buttonClear">Finalizar compra</button>
        </div>
      </>
      
    }
    </div>
  )
}

export default Cart
