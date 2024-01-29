import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from "prop-types"
import "./Item.css"

const Item = (props) => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body className='bodyCard'>
        <Card.Title className='tituloCard'>{props.title}</Card.Title>
        <Card.Text className='textoCard'>{props.descripcion}</Card.Text>
        <Button variant="primary">{props.button}</Button>
      </Card.Body>
    </Card>
    </>
  )
}

Item.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
}

export default Item
