import { useState,createContext} from "react";
import PropTypes from "prop-types"

export const CartContext = createContext();

const CartProvider = ({children}) =>{
    const [cart,setCart] = useState([])
    const [total,setTotal] = useState(0)
    const [totalQuantity,setTotalQuantity] = useState(0)

    const addToCart = (product,quantity) =>{
        const productExist = cart.find(p=>p.product.id == product.id)
        if(!productExist){
            cart.push({product,quantity})
        }else{
            productExist.quantity += quantity;
        }
        let totalQuantity = 0;
        cart.forEach(p=>{
            totalQuantity += p.quantity
        })
        setTotalQuantity(totalQuantity)
        let total = 0;
        cart.forEach(p=>{
            total += p.product.price * p.quantity
        })
        setTotal(total)
    }

    const deleteItem = (id) => {
        const cartFiltered = cart.filter(p=>p.product.id != id)
        setCart(cartFiltered)
        let total = 0;
        cartFiltered.forEach(p=>{
            total += p.product.price * p.quantity
        })
        setTotal(total)
        let totalQuantity = 0;
        cartFiltered.forEach(p=>{
            totalQuantity += p.quantity
        })
        setTotalQuantity(totalQuantity)
    }

    const clearCart = () => {
        setCart([])
        setTotalQuantity(0)
        setTotal(0)
    }

    return(
        <CartContext.Provider value={
           {
            cart,
            total,
            totalQuantity,
            addToCart,
            deleteItem,
            clearCart
           }
        }>
            {children}
        </CartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: PropTypes.any.isRequired
}

export default CartProvider