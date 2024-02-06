import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
    const [product,setProduct] = useState(null);
    const {id} = useParams();
    useEffect(()=>{
        const fetchData = async() =>{
          try{
            const response = await fetch("/products.json")
            const data = await response.json()
            const product = data.find(p=>p.id == id)
            setProduct(product)
          }catch(e){
            console.log(e)
          }
        }
        fetchData()
      },[id])
  return (
    <div className="itemDetailContainer">
      {product === null ? <Loader text="Cargando el producto..."/> : <ItemDetail product={product}/>}
    </div>
  )
}


export default ItemDetailContainer
