import { useState } from "react"
import "./ItemCount.css"

const ItemCount = () => {
  const [count,setCount] = useState(1);

  return (
    <>
    <div className="containerCarts">
      <div className="buttonsCart">
        <button className="buttonDecrement" onClick={()=> setCount((count) =>{
          if(count > 1){
              return count - 1
          }else{
              return count
          }
        } )}>-</button>
        <p className="count">{count}</p>
        <button className="buttonIncrement" onClick={()=> setCount((count) => {
          if(count < 10) {
            return count + 1
          }else{
              return count
          }
        } )}>+</button>
      </div>
      <div className="divAddToCart"> 
          <button className="buttonAddToCart">Agregar al carrito</button>
      </div>
    </div>

    </>

  )
}

export default ItemCount
