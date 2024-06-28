import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, selectCountValue } from '../../../store/counter'

export default function Counter() {
  
  // const count = useSelector(selectCountValue)
  const count = useSelector((state) => state.counter.value)
  const counterObj = useSelector((state) => state.counter)
  console.log(count, "count");
  console.log(counterObj, "counterObj");
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}