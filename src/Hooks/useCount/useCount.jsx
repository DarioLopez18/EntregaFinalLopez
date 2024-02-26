import PropTypes from "prop-types"
import { useState } from "react"

export const useCount = (valorInicial,valorMax,valorMin) => {
    const [count,setCount] = useState(valorInicial)

    const increment = () =>{
        if(count < valorMax) setCount(count => count + 1)
    }

    const decrement = () =>{
        if(count > valorMin) setCount(count => count - 1)
    }

    const reset = () =>{
        setCount(valorInicial)
    }

    return {count,decrement,increment,reset}
}

useCount.propTypes = {
    valorInicial: PropTypes.number.isRequired,
    valorMax: PropTypes.number.isRequired,
    valorMin: PropTypes.number.isRequired
}
