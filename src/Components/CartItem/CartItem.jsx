import { Card } from "react-bootstrap"
import PropTypes from "prop-types"
import "./CartItem.css"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import Button from "../Button/Button"
import { Link } from "react-router-dom"

const CartItem = ({product,quantity}) => {
  const {deleteItem} = useContext(CartContext)
  const deleteItemCart = () =>[
    deleteItem(product.id)
  ]
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.img} alt={product.title} />
    <Card.Body className='bodyCard'>
      <Card.Title className='tituloCard'>{product.title}</Card.Title>
      <Card.Text className='priceCart'>${product.price}</Card.Text>
      <Card.Text className='quantityCart'>Unidades: {quantity}</Card.Text>
      <Card.Text className='subtotalCart'>Subtotal: ${product.price * quantity}</Card.Text>
      <Button detail="Quitar item" onClick={deleteItemCart}/>
      <Link to={`/item/${product.id}`} className="viewProduct">Ver producto</Link>
    </Card.Body>
  </Card>
  )
}

CartItem.propTypes = {
    product: PropTypes.object.isRequired,
    quantity: PropTypes.number.isRequired
}

export default CartItem
