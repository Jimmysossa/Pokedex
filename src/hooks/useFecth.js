import axios from "axios"
import { useState } from "react"

const useFecth = url => {

    const [response, setResponse] = useState()
    const [hasError, setHasError] = useState(false)

    const getApi = () => {
        axios.get(url)
        .then(res => {
            setResponse(res.data)
            setHasError(false)    
        })
        .catch(err => {
            console.log(err)
            setHasError(true)   
        })
    }

    const getTypePokemon = (urlType) => {
        axios.get(urlType)
        .then(res => { 
            const obj = {
                results: res.data.pokemon.map(pokeInfo => pokeInfo.pokemon)
            }
            setResponse(obj)
        })
        .catch(err => console.log(err))
    }
 
    return [ response, getApi, getTypePokemon, hasError ]
}

export default useFecth