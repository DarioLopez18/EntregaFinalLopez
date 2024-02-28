
import Item from "../Item/Item";
import "./ItemList.css"
import PropTypes from "prop-types"
import Loader from "../Loader/Loader";
import { useState } from "react";
import Pagination from "../Pagination/Pagination";

const ItemList = ({products,category}) => {
  const [productsPerPage,setProductsPerPage] = useState(6)
  const [currentPage,setCurrentPage] = useState(1)
  const totalProducts = products.length
  let lastIndex = 3
  let firstIndex = 0
  if(!category){
    lastIndex = currentPage * productsPerPage 
    firstIndex = lastIndex - productsPerPage
  }

  return (
    <section className='productsContainer'>
    {products.length == 0 ? <Loader text="Cargando los productos"/> : products.map(p=>{
      return(
        <Item key={p.id} id={p.id} title = {p.title} descripcion={p.descripcion} img={p.img} button={p.button} stock = {p.stock}/>
      )}).slice(firstIndex,lastIndex)}
    <Pagination productsPerPage = {productsPerPage} currentPage = {currentPage} setCurrentPage = {setCurrentPage} totalProducts = {totalProducts} />
    </section>
  )
}

ItemList.propTypes = {
  products: PropTypes.array.isRequired
}

export default ItemList
