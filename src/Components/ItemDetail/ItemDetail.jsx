import { Card } from "react-bootstrap";
import PropTypes from "prop-types"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { useState , useContext } from "react";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2';

const ItemDetail = ({product}) => {
  const Modal = withReactContent(Swal);
  const [cartState,setCartState] = useState(false)
  const {addToCart} = useContext(CartContext)
  const handleAddToCart = count =>{
    setCartState(true)
    addToCart(product,count)
    Modal.fire({
      title: "Producto agregado",
      text: "Puedes ver tu carrito o seguir comprando.",
      icon: "success",
      confirmButtonText: 'Aceptar'
    })
  }
  return (
    <Card className="itemDetail">
    <div className="d-md-flex">
      <div className="flex-shrink-0">
        <Card.Img variant="top" src={product.img} alt={product.title} />
      </div>

      <div className="flex-grow-1">
        <Card.Body className="descripcion">
          <Card.Title className="titulo">{product.title}</Card.Title>
          <Card.Text className="detalle">{product.detail}</Card.Text>
          <Card.Text className="precio">${product.price}</Card.Text>
          {cartState ? <div className="linksCart">
            <NavLink to={"/cart"} className="linkin"><Button className="buttonAddToCart" detail={"Ir al carrito"} onClick={()=>{}}/></NavLink>
            <NavLink to={"/"} className="linkin"><Button className="buttonAddToCart" detail={"Seguir comprando"} onClick={()=>{}}/></NavLink>
          </div>  : <ItemCount stock={product.stock} onAddToCart={handleAddToCart}/>}
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
