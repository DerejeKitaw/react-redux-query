import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import CounterApp from './component/counter-app/CounterApp'
import PokemonApp from './component/pokemon-app/PokemonApp'
import ConditionalFetchingApp from './component/conditional-fetching/ConditionalFetchingApp'
import DedupingQueriesApp from './component/deduping-queries/DedupingQueriesApp'
import MutationApp from './component/mutations/MutationApp'

ReactDOM.render(
  <React.StrictMode>
    {/* <MutationApp /> */}
    {/* <DedupingQueriesApp /> */}
    {/* <ConditionalFetchingApp /> */}
    <PokemonApp />
    {/* <CounterApp /> */}
  </React.StrictMode>,
  document.getElementById('root')
)
