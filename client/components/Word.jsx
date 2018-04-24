import React from 'react'
import {connect} from 'react-redux'
import {deleteWord} from '../actions'

class Word extends React.Component {
  constructor (props) {
    super(props)
    this.delWord = this.delWord.bind(this)
  }

  delWord (e, dispatch) {
    const id = Number(e.target.id)
    dispatch(deleteWord(id))
  }

  render () {
    return (
      <div>
        <div>{this.props.word}</div>
        <button
          id={this.props.id}
          className="delete-word"
          name={`${this.props.word}`}
          onClick={e => {
            this.delWord(e, this.props.dispatch)
          }}>
            Delete
        </button>
      </div>
    )
  }
}

export default connect()(Word)
