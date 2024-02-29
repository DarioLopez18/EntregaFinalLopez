import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore';
import { Link } from "react-router-dom";
import { bd } from "../../firebase/firebase";

const ItemDetailContainer = () => {
    const [product,setProduct] = useState(null);
    const [error,setError] = useState(null);
    const {id} = useParams();
    const handleClickError = () => {
      setError(null)
    }
    useEffect(()=>{
      const productRef = doc(bd,"items",id)
      getDoc(productRef).then(snapshot=>{
        if(snapshot.exists()){
          setError(null)
          setProduct({id:snapshot.id,...snapshot.data()})
        }else{
          setError("Producto no encontrado")
        }
      })
      },[id])
  return (

    <>
    {error ? 
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <h1 className="text marginbottom">Error: {error}</h1>
      <Link className="buttonError" to={'/'} onClick={handleClickError} style={{textDecoration:'none'}}> 
       Ir a los productos
      </Link>
    </div> 
    : 
    <div className="itemDetailContainer">
    {product === null ? <div className="marginDetail"><Loader  text="Cargando el producto..."/></div> : <ItemDetail product={product}/>}
    </div>
    }
    </>

  )
}

export default ItemDetailContainer
