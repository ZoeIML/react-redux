import React from 'react'

import Words from './Words'
import AddWord from './AddWord'
// import Images from './Images'
import AddImg from './AddImg'
import ImageContainer from './ImageContainer'

const App = () => (
  <div className='app-container'>
    <Words />
    <AddWord />
    <ImageContainer />
    <AddImg />
  </div>
)

export default App
