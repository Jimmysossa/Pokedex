import { useParams } from "react-router-dom"
import useFecth from "../../hooks/useFecth"
import { useEffect } from "react"

const PokemonPage = () => {

    const { id } = useParams()

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const [ pokemon, getPokemon ] = useFecth(url)

    useEffect(() => {
      getPokemon()
    }, [])
    
    return (
        <div className={`pokecard_border ${pokemon?.types[0].type.name}`} onClick={handleNavigatePokemon}>
            <article className="pokecard">
                <header className="pokecard_header">
                    <img className="pokecard_img" src={pokemon?.sprites.other["official-artwork"].front_default} alt="Pokemon" />
                </header>
                <section className="pokecard_body">
                    <h3 className="pokecard_name">{pokemon?.name}</h3>
                    <ul className="pokecard_types">
                         {pokemon?.types.map((typeInfo) => (
                         <li className="pokecard_types_item" key={typeInfo.type.url}>{typeInfo.type.name}</li>
                         ))}
                        
                    </ul>
                    <hr className="pokecard_hr"/>
                    <ul className="pokecard_stats">
                        {
                         pokemon?.stats.map(statInfo => (
                            <li className="pokecard_stats_item" key={statInfo.stat.url}>
                                <span className="pokecard_stats_label">{statInfo.stat.name}</span>
                                <span className="pokecard_stats_value">{statInfo.base_stat}</span>
                            </li>
                         ))
                        }
                    </ul>
                </section>
            </article>
        </div>
    )
}

export default PokemonPage