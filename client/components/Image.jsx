import React from 'react'

const Image = (props) => (
  <div>
    <img src={props.image}/>
    <button>Delete Pic</button>
  </div>
)

export default Image
