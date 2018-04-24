import React from 'react'

import WordContainer from './WordContainer'
import AddWord from './AddWord'
// import Images from './Images'
import AddImg from './AddImg'
import ImageContainer from './ImageContainer'

const App = () => (
  <div className='app-container'>
    <WordContainer />
    <AddWord />
    <ImageContainer />
    <AddImg />
  </div>
)

export default App
