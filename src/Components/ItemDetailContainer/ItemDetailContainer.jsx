import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"
import Loader from "../Loader/Loader";

const ItemDetailContainer = ({id}) => {
    const [product,setProduct] = useState([]);
    useEffect(()=>{
        const fetchData = async() =>{
          try{
            const response = await fetch("./products.json")
            const data = await response.json()
            const product = data.find(p=>p.id === id)
            setTimeout(()=>{
              setProduct(product)
            },1000)
          }catch(e){
            console.log(e)
          }
        }
        fetchData()
      },[id])
  return (
    <div className="itemDetailContainer">
      {product.length === 0 ? <Loader text="Cargando el producto..."/> : <ItemDetail product={product}/>}
    </div>
  )
}

ItemDetailContainer.propTypes = {
    id: PropTypes.number.isRequired
}


export default ItemDetailContainer
