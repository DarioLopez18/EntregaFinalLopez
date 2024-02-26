
import Item from "../Item/Item";
import "./ItemList.css"
import PropTypes from "prop-types"
import Loader from "../Loader/Loader";

const ItemList = ({products}) => {
  return (
    <section className='productsContainer'>
    {products.length == 0 ? <Loader text="Cargando los productos"/> : products.map(p=>{
      return(
        <Item key={p.id} id={p.id} title = {p.title} descripcion={p.descripcion} img={p.img} button={p.button} stock = {p.stock}/>
      )})}
    </section>
  )
}

ItemList.propTypes = {
  products: PropTypes.array.isRequired
}

export default ItemList
