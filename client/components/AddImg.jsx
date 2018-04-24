import React from 'react'
import {connect} from 'react-redux'
import {addImage} from '../actions'

function submitImg (e, dispatch) {
  if (e.keyCode === 13) {
    dispatch(addImage(e.currentTarget.value))
    e.currentTarget.value = ''
  }
}

const AddImg = (props) => (
  <input
    placeholder='Enter a pic url'
    onKeyUp={e => {
      submitImg(e, props.dispatch)
    }}

  />
)

export default connect()(AddImg)
