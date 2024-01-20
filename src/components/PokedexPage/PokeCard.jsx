import { useEffect } from "react"
import useFecth from "../../hooks/useFecth"
import { useNavigate } from "react-router-dom"

const PokeCard = ({ url }) => {
    const [pokemon, getPokemons] = useFecth(url)

    useEffect(() => {
        getPokemons()
    }, [])

    const navigate = useNavigate()
    const handleNavigatePokemon = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }

    return (
        <div onClick={handleNavigatePokemon}>
            <article>
                <header>
                    <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="Pokemon" />
                </header>
                <section>
                    <h3>{pokemon?.name}</h3>
                </section>
                <ul>
                    {
                        pokemon?.types.map((typeInfo) => (
                            <li key={typeInfo.type.url}>{typeInfo.type.name}</li>
                        ))
                    }
                </ul>
                <hr />
                <ul>
                    {
                        pokemon?.stats.map(statInfo => (
                            <li key={statInfo.stat.url}><span>{statInfo.stat.name}</span><span>{statInfo.base_stat}</span></li>
                        ))
                    }
                </ul>
            </article>
        </div>
    )

}

export default PokeCard