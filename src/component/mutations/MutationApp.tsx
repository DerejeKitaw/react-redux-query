
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { store } from './store'
import { Provider } from 'react-redux'

// import { BrowserRouter } from 'react-router-dom'
import { worker } from './mocks/browser'


export default function MutationApp() {
  return (
    <React.StrictMode>
    <Provider store={store}>
          <App />
    </Provider>
  </React.StrictMode>
  )
}
