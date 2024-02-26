import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [product,setProduct] = useState(null);
    const {id} = useParams();
    useEffect(()=>{
      const db = getFirestore()
      const productRef = doc(db,"items",id)
      getDoc(productRef).then(snapshot=>{
        if(snapshot.exists()){
          setProduct({id:snapshot.id,...snapshot.data()})
        }
      })
      },[id])
  return (
    <div className="itemDetailContainer">
      {product === null ? <Loader text="Cargando el producto..."/> : <ItemDetail product={product}/>}
    </div>
  )
}


export default ItemDetailContainer
