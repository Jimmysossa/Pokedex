import { useSelector } from "react-redux"
import useFecth from "../hooks/useFecth"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"
import "../components/PokedexPage/styles/PokedexPage.css"

const PokedexPage = () => {

  const [typeSelected, setTypeSelected] = useState('allpokemons')
  const [ inputValue, setInputValue ] = useState('')

  const trainerName = useSelector( states => states.trainer )

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
  const [ pokemons, getPokemons, getTypePokemon ] = useFecth(url)

  useEffect(() => {
    if (typeSelected === 'allpokemons') {
      getPokemons()
    } else {
      getTypePokemon(typeSelected)
    }
    getPokemons()
  },[typeSelected])

  const inputName = useRef()

  const handleSearch = e => {
    e.preventDefault()
    setInputValue(inputName.current.value.trim().toLowerCase())
  }

  const cbFilter = (pokeInfo) => pokeInfo.name.toLowerCase().includes(inputValue) 

  return (
    <>
      <div className="rectangle_red list"> 
        <div className="rectangle_black"></div>
        <div className="cirlcle list"></div>
        <img className="pokedex-letters-header" src="/pokedex.png" alt=" pokedex letter" />  
      </div>
      <div className="header_filter">
        <h2 className="welcome">Hi <span className="name">{trainerName}</span>, here you can find your favorite pokemon</h2>
        <div className="form_container_list">
          <form onSubmit={handleSearch}>
            <input className="filter_bar" ref={inputName} type="text" />
            <button className="btn_home">Search</button>
          </form>
          <SelectType setTypeSelected={setTypeSelected}/>
        </div>
        <div className="card_container">
          {
            pokemons?.results.filter(cbFilter).map(pokeInfo => (
              <PokeCard
                key={pokeInfo.url}
                url={pokeInfo.url}
                />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default PokedexPage