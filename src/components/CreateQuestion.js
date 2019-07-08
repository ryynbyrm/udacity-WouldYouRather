import React, { Component } from 'react'
import { connect} from 'react-redux'
import { handleAddQuestion} from '../actions/questions'
import { Redirect } from 'react-router-dom'
class CreateQuestion extends Component {
  state = {
      redirect: false
  }
  addQuestion = (e) => {
    e.preventDefault()
    const { dispatch, authedUser } = this.props;
    let optOne = e.target[0].value
    let optTwo = e.target[1].value
    dispatch(handleAddQuestion(authedUser, optOne, optTwo))
    .then(() =>
      this.setState(() => ({
        redirect: true
      }))
    )
  }

  render () {
    const { authedUser } = this.props
    if (authedUser === null) {
      return <Redirect to='/login' />
    }
    if (this.state.redirect) {
      return <Redirect to='/home' />
    }
    return (
      <div className="row">
      <form onSubmit={this.addQuestion}>
          <div className="form-group">
            <label>Would you Rather:</label>
          </div>
          <div className="form-group">
            <label htmlFor="first">First Question</label>
            <input type="text" className="form-control" placeholder="Enter your first option"/>
          </div>
          <div className="form-group">
            <label htmlFor="second">Second Question</label>
            <input type="text" className="form-control" placeholder="Enter your second option"/>
          </div>
          <button type="submit" className="btn btn-primary">Add Question</button>
        </form>
      </div>
    )
  }
}


function mapStateToProps({ authedUser }) {
    return {
      authedUser
    }
}
  
export default connect(mapStateToProps)(CreateQuestion) 

