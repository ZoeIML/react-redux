import React from 'react'
import {connect} from 'react-redux'
import {deleteImage} from '../actions'

class Image extends React.Component {
  constructor (props) {
    super(props)
    this.delImg = this.delImg.bind(this)
  }

  delImg (e, dispatch) {
    const id = Number(e.target.id)
    dispatch(deleteImage(id))
  }

  render () {
    return (
      <div>
        <img src={this.props.image}/>
        <button
          id={this.props.id}
          onClick={e => {
            this.delImg(e, this.props.dispatch)
          }}>
          Delete Pic
        </button>
      </div>
    )
  }
}

export default connect()(Image)
