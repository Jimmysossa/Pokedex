import { useEffect } from "react"
import useFecth from "../hooks/useFecth"
import { useParams } from "react-router-dom"

const PokemonPage = () => {

  const { id } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const { pokemon, getPokemon } = useFecth(url)

  useEffect(() => {
    getPokemon()
  }, [])

  console.log(pokemon)

  return (
    <div>
      <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="pokemon img" />
      <h2>{pokemon?.name}</h2>
    </div>
  )
}

export default PokemonPage