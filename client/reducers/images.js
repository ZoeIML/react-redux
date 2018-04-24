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

    default:
      return state
  }
}

export default images
