let nextWordId = 0
let nextPicId = 0

export const addWord = (word) => {
  return {
    type: 'ADD_WORD',
    id: nextWordId++,
    word
  }
}

export const addImage = (image) => {
  return {
    type: 'ADD_PIC',
    id: nextPicId++,
    image
  }
}
