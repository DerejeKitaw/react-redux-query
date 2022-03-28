import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import CounterApp from './component/counter-app/CounterApp'
import PokemonApp from './component/pokemon-app/PokemonApp'

ReactDOM.render(
  <React.StrictMode>
    <PokemonApp />
    {/* <CounterApp /> */}
  </React.StrictMode>,
  document.getElementById('root')
)
