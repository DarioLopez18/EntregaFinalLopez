import { Card } from "react-bootstrap"
import PropTypes from "prop-types"
import "./CartItem.css"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import Button from "../Button/Button"
import { NavLink } from "react-router-dom"

const CartItem = ({product,quantity}) => {
  const {deleteItem} = useContext(CartContext)
  const deleteItemCart = () =>[
    deleteItem(product.id)
  ]
  return (
    <>
      <Card className="responsiveCard">
      <div className="d-md-flex">
        {/* Columna para la imagen */}
        <div className="flex-shrink-0">
          <Card.Img variant="top" src={product.img} alt={product.title} />
        </div>

        {/* Columna para el texto y botones */}
        <div className="flex-grow-1">
          <Card.Body className="descripcion" style={{textAlign:"center"}}>
            <Card.Title className="titulo">{product.title}</Card.Title>
            <Card.Text className="detalle">{product.detail}</Card.Text>
            <Card.Text className="precio">${product.price}</Card.Text>
            <Card.Text className='quantityCart'>Unidades: {quantity}</Card.Text>
            <Card.Text className='subtotalCart'>Subtotal: ${product.price * quantity}</Card.Text>
            <div className="itemProduct">
                <Button detail="Quitar item" onClick={deleteItemCart}/>
                <NavLink to={`/item/${product.id}`} className="viewProduct">Ver producto</NavLink>
            </div>
          </Card.Body>
        </div>
      </div>
    </Card>
    </>
  )
}

CartItem.propTypes = {
    product: PropTypes.object.isRequired,
    quantity: PropTypes.number.isRequired
}

export default CartItem
