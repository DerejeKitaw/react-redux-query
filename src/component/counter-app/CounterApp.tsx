import { Unsubscribe } from '@reduxjs/toolkit'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { setupCounterListeners } from '../../services/counter/listeners'
import { startAppListening, store } from '../../store'
import { CounterList } from './CounterList/CounterList'
import CreateCounterForm from './CreateCounterForm/CreateCounterForm'
// import './App.css'

function CounterApp() {
  useEffect(() => {
    const subscriptions: Unsubscribe[] = [
      setupCounterListeners(startAppListening),
    ]

    return () => subscriptions.forEach((unsubscribe) => unsubscribe())
  }, [])
  return (
    <React.StrictMode>
    <Provider store={store}>
      <main className={'main'}>
        <CreateCounterForm />
        <CounterList />
      </main>
    </Provider>
  </React.StrictMode>
  )
}

export default CounterApp
