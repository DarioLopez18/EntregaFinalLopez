
import Item from "../Item/Item";
import "./ItemList.css"
import PropTypes from "prop-types"

const ItemList = ({products}) => {
  return (
    <section className='productsContainer'>
    {products.length == 0 ? <div className="divLoader"><h1>Cargando los productos...</h1> <span className="loader"></span></div>: products.map(p=>{
      return(
        <Item key={p.id} title = {p.title} descripcion={p.descripcion} img={p.img} button={p.button} stock = {p.stock}/>
      )})}
    </section>
  )
}

ItemList.propTypes = {
  products: PropTypes.array.isRequired
}

export default ItemList
