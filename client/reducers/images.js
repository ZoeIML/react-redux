const images = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PIC':
      return [
        ...state,
        {
          id: action.id,
          image: action.image
        }
      ]

    case 'DEL_IMG':
      return state.filter((image) => {
        return image.id !== action.id
      })

    default:
      return state
  }
}

export default images
