import "./Checkout.css"
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useState, useContext} from "react";
import { CartContext } from "../../context/CartContext"
import { getFirestore, addDoc, collection } from 'firebase/firestore';

const Checkout = () => {
    const [order,setOrder] = useState(null);
    const [detail, setDetail] = useState(null);
    const {cart,total,clearCart} = useContext(CartContext)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const createOrder = async() => {
        
      }

      const handleSubmit = async(e) => {
        e.preventDefault();
        const buyer = {
            name: formData.name,
            phone: formData.phone,
            email: formData.email
        }
        const items = []
        cart.forEach(product=>{
            items.push({
                id: product.product.id,
                title: product.product.title,
                price: product.product.price
            })
        })
        setDetail({buyer,items,total})
        const db = getFirestore()
        const order = {buyer,items,total}
        const orderCollections = collection(db,"orders")
        const orderBD = await addDoc(orderCollections,order)
        setOrder(orderBD.id)
        createOrder()
        clearCart()
      };
    
  return (
    <>
    {order ? 
    
    <div className="contenedor_general" style={{textAlign:'center'}}><h1 className="totalCart">Tu compra ha sido completada con exito,tu comprobante: {order}</h1></div>  
    
    :
    cart.length == 0 ?
     <div className="contenedor_general" style={{textAlign:'center'}}><h1 className="totalCart">El carrito se encuentra vacio, no puedes finalizar tu compra!</h1></div>  : 
     <div className="contenedor_general" style={{textAlign:'center'}}>
        <h1 className="totalCart">Para finalizar tu compra,debes completar el siguiente formulario!</h1>
      <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label style={{color:'white',fontSize:'16px',fontWeight:'bold',textShadow:'1px 1px 2px black'}}>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label style={{color:'white',fontSize:'16px',fontWeight:'bold',textShadow:'1px 1px 2px black'}}>Teléfono</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Ingresa tu teléfono"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label style={{color:'white',fontSize:'16px',fontWeight:'bold',textShadow:'1px 1px 2px black'}}>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo electrónico"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="btn button btn-primary" style={{marginTop: '16px',background:'#d12b3e', border:'none', marginBottom:'16px'}}>
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
    }
    </>
  )
}

export default Checkout