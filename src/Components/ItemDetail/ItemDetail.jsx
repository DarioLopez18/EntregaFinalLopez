import { Card } from "react-bootstrap";
import PropTypes from "prop-types"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { useState } from "react";

const ItemDetail = ({product}) => {
  const [cartItemCount, setCartItemCount] = useState({});

  const handleAddToCart = count =>{
    product.quantity = count
    setCartItemCount(product)
    console.log(cartItemCount)
  }

  return (
    <Card className="itemDetail">
    <div className="d-md-flex">
      {/* Columna para la imagen */}
      <div className="flex-shrink-0">
        <Card.Img variant="top" src={product.img} alt={product.title} />
      </div>

      {/* Columna para el texto y botones */}
      <div className="flex-grow-1">
        <Card.Body className="descripcion">
          <Card.Title className="titulo">{product.title}</Card.Title>
          <Card.Text className="detalle">{product.detail}</Card.Text>
          <Card.Text className="precio">${product.price}</Card.Text>
          <ItemCount stock={product.stock} onAddToCart={handleAddToCart}/>
        </Card.Body>
      </div>
    </div>
  </Card>
  )
}

ItemDetail.propTypes = {
    product: PropTypes.object.isRequired,
}

export default ItemDetail
