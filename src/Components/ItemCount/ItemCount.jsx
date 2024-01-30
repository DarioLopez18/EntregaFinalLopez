import { useState } from "react"
import "./ItemCount.css"
import PropTypes from "prop-types"
import Button from "../Button/Button"

const ItemCount = ({stock}) => {
  const [count,setCount] = useState(1);
  return (
    <>
    <div className="containerCarts">
      <div className="buttonsCart">
        <div>
        <Button  detail={"-"} onClick={()=> setCount((count) =>{
          if(count > 1){
              return count - 1
          }else{
              return count
          }
        } )}/>
        </div>
        <p className="count">{count}</p>
        <div>
        <Button  detail={"+"} onClick={()=> setCount((count) => {
          if(count < stock) {
            return count + 1
          }else{
              return count
          }
        } )}/>
          </div>
      </div>
      <div className="divAddToCart"> 
          <Button detail={"Agregar al carrito"} className="buttonAddToCart"/>
      </div>
    </div>

    </>

  )
}

ItemCount.propTypes = {
  stock: PropTypes.number.isRequired
}
export default ItemCount
