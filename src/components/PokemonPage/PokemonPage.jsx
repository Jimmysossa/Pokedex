import { useParams } from "react-router-dom"
import useFecth from "../../hooks/useFecth"
import { useEffect } from "react"

const PokemonPage = () => {

    const { id } = useParams()

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    cpnst [ PokemonPage,getPokemon ] = useFecth(url)

    useEffect(() => {
      getPokemon()
    }, [])
    
    return (
        <div>
            <img src="" alt="" />
            <h2></h2>
        </div>
    )
}

export default PokemonPage