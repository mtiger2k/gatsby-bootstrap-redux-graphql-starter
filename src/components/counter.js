import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseAction } from '../redux/actions/countActions'

import { makeSelectCount } from '../redux/selectors/count'

export default () => {

  const count = useSelector(makeSelectCount())
  const dispatch = useDispatch()
  const onIncreaseClick = useCallback(
    () => dispatch(increaseAction),
    []
  )
  
  return (
    <div>
      <span>count: {count}</span>
      <button onClick={onIncreaseClick}>Increase</button>
    </div>
  )

}