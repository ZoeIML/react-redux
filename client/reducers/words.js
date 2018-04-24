const words = (state = [], action) => {
  switch (action.type) {
    case 'ADD_WORD':
      return [
        ...state,
        {
          id: action.id,
          word: action.word
        }
      ]
    case 'DEL_WORD':
      return state.filter((word) => {
        return word.id !== action.id
      })

    default:
      return state
  }
}

export default words
