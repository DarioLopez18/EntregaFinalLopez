import { useEffect,useState } from "react"

export const useFetch = (url) =>{
    const [data,setData] = useState(null)

    useEffect(()=>{
      fetch(url)
        .then(response =>{ response.json()})
        .then(data => setData(data))  
        .catch(error => console.log(error))
    })

    return data
}