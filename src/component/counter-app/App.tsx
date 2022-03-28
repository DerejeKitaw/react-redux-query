import { Unsubscribe } from "@reduxjs/toolkit"
import { useEffect } from "react"
import { CounterList } from "./CounterList/CounterList"
import CreateCounterForm from "./CreateCounterForm/CreateCounterForm"
import { setupCounterListeners } from "./services/counter/listeners"
import { startAppListening } from "./store"

export default function App() {
  useEffect(() => {
    const subscriptions: Unsubscribe[] = [
      setupCounterListeners(startAppListening),
    ]

    return () => subscriptions.forEach((unsubscribe) => unsubscribe())
  }, [])

  return (
    <main className={'main'}>
        <CreateCounterForm />
        <CounterList />
      </main>
  )
}
