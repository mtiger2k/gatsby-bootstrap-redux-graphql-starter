const initialState = {
  count: 0
}

export default function counter(state = initialState, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
   }
}