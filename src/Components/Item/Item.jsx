import Card from 'react-bootstrap/Card';
import PropTypes from "prop-types"
import "./Item.css"
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} alt={props.title} />
      <Card.Body className='bodyCard'>
        <Card.Title className='tituloCard'>{props.title}</Card.Title>
        <Card.Text className='textoCard'>{props.descripcion}</Card.Text>
      </Card.Body>
      <div className='buttonItemProps'>
        <Link className='link' to = {`/item/${props.id}`}>
          <Button onClick={()=>{}} detail={props.button}/>
        </Link>
      </div>
    </Card>
    </>
  )
}

Item.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
}

export default Item
