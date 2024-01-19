import { useRef } from "react"
import { setTrainerG } from "../store/states/trainer.state"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import  "../styles/HomePage.css"

const HomePage = () => {
  const dispatch = useDispatch ()
  const inputTrainer = useRef()
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setTrainerG(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }

  return (
    <article className="home">
      <img className="logo" src="/pokedex.png" alt="pokedex logo" />
      <h1 className="title_home">Hi Trainer!</h1>
      <p className="description">To star this app, give me your trainer name.</p>
      <form className="form_home" onSubmit={handleSubmit}>
        <input className="input_home" ref={inputTrainer} type="text" placeholder="Enter your trainer name." />
        <button className="btn_home">Let's go!</button>
      </form>
      <div className="rectangle_red">
        <div className="rectangle_black"></div>
        <div className="circle"></div>
      </div>
    </article>
  )
}

export default HomePage