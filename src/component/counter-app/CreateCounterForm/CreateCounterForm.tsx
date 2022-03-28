import { FormEvent, useState } from 'react'
import styles from './createCounter.module.css'
import { useAppDispatch } from '../store'
import { counterActions } from '../services/counter/slice'
import clsx from 'clsx'
const sectionClassname = clsx('paper', styles.section)
function CreateCounterForm() {
  const [initialValue, setInitialValue] = useState(0)
  const appDispatch = useAppDispatch()
  const handleSubmit = (evt: FormEvent) => {
    console.log(evt)
    evt.preventDefault()
    appDispatch(counterActions.addCounter({ initialValue }))
  }
  return (
    <section className={sectionClassname}>
    <h3 className={styles.heading}>Create counter</h3>
    <form action="#" className={styles.form} onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="input-range">initial value: {initialValue}</label>
        <input
          type="range"
          name="counter-value"
          id="counter-value"
          min={0}
          max={10}
          value={initialValue}
          onChange={({ target }) => {
            setInitialValue(Number(target.value))
          }}
        />
      </div>
      <button type="submit">Add counter</button>
    </form>
  </section>
  )
}
export default CreateCounterForm
