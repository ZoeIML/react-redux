import React from 'react'
import {connect} from 'react-redux'
import {deleteWord} from '../actions'

function delWord (e, dispatch) {
  const id = Number(e.currentTarget.id)
  dispatch(deleteWord(id))
}

const Word = (props) => (
  <div>
    <div>{props.word}</div>
    <button
      className="delete-word"
      name={`${props.word}`}
      onClick={e => {
        delWord(e, props.dispatch)
      }}>
    Delete
    </button>
  </div>
)

export default connect()(Word)
