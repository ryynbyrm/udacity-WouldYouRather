import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/authedUser'
import User from './User'

class Login extends Component {
  componentWillMount() {
    const { dispatch } = this.props
    dispatch(login(false))
  }

  render() {
    const { users, location } = this.props
    return (
      <div>
        <h3 className="center">Please select a user</h3>
        {Object.keys(users).map(id => (
          <div key={id}>
            <User id={id} location={location} />
          </div>
        ))}
      </div>
    )
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    users,
    questions,
    authedUser
  }
}
export default connect(mapStateToProps)(Login)
