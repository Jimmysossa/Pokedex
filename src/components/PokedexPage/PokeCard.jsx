import { useEffect } from "react"
import useFecth from "../../hooks/useFecth"

const PokeCard = ({ url }) => {
    const [ pokemon, getPokemons ] = useFecth(url)

    useEffect(() => {
    getPokemons()
},[])

console.log(pokemon)

return (
    <div>PokeCard</div>
)

}

export default PokeCard