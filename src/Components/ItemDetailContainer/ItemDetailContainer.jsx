import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const ItemDetailContainer = () => {
    const Modal = withReactContent(Swal);
    const [product,setProduct] = useState(null);
    const [error,setError] = useState(null);
    const {id} = useParams();
    const handleAceptarClick = () => {
      setError(null);
      window.location.href="/"
    };
    useEffect(()=>{
      const db = getFirestore()
      const productRef = doc(db,"items",id)
      getDoc(productRef).then(snapshot=>{
        if(snapshot.exists()){
          setError(null)
          setProduct({id:snapshot.id,...snapshot.data()})
        }else{
          setError("Producto no encontrado,lo redigiremos a la ruta principal")
        }
      })
      },[id])
  return (
    <div className="itemDetailContainer">
      {product === null ? <Loader text="Cargando el producto..."/> : <ItemDetail product={product}/>}
      {error && 
        Modal.fire({
          title: "Error",
          text: error,
          icon: "error",
          confirmButtonText: 'Aceptar',
          allowOutsideClick: false
        }).then((result)=>{
          setError(null)
          if(result.isConfirmed){
            handleAceptarClick()
          }
        })
      }
    </div>
  )
}


export default ItemDetailContainer
