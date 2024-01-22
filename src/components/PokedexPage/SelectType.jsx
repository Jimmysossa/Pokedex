import { useEffect, useRef } from "react"
import useFecth from "../../hooks/useFecth"

const SelectType = ({ setTypeSelected }) => {

    const url = 'https://pokeapi.co/api/v2/type'
    const [ types, getTypes ] = useFecth(url)

    useEffect(() => {
        getTypes()
    },[])

    const typeRef = useRef()

    const handleChange = () => {
        setTypeSelected(typeRef.current.value)
    }

  return (
    <select className="select_type_pokemon" ref={typeRef} onChange={handleChange}>
        <option value={'allpokemons'}>All Pokemons</option>
        {
            types?.results.map(type => (
                <option key={type.url} value={type.url}>{type.name}</option>
            ))
        }
    </select>
  )
}

export default SelectType