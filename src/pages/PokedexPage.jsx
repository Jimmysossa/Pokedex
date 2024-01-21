import { useSelector } from "react-redux"
import useFecth from "../hooks/useFecth"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"

const PokedexPage = () => {

  const [typeSelected, setTypeSelect] = useState('allpokemons')
  const [ inputValue, setInputValue ] = useState('')

  console.log(typeSelected);

  const trainerName = useSelector( states => states.trainer )

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
  const [ pokemons, getPokemons ]= useFecth(url)

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
    <div>
      <h2>Hi <span>{trainerName}</span>, here you can find your favorite pokemon</h2>
      <form onSubmit={handleSearch}>
        <input ref={inputName} type="text" />
        <button>Search</button>
      </form>
      <SelectType setTypeSelect={setTypeSelect}/>
      <div>
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
  )
}

export default PokedexPage