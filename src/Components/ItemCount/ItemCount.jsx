import { useState } from "react"
import "./ItemCount.css"
import PropTypes from "prop-types"

const ItemCount = ({stock}) => {
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
          if(count < stock) {
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

ItemCount.propTypes = {
  stock: PropTypes.number.isRequired
}
export default ItemCount
