import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Question from './Question'

class Home extends Component {

  render() {
    const { unanswered, answered, authedUser} = this.props
    if (authedUser === null) {
      return <Redirect to='/login' />
    }
      return (
        <div className="row">
          <div className="card bg-light">
            <div className="card-header">Unanswered Question</div>
            <div className="card-body">
            {unanswered.map((id) => (
                <li key={id}>
                  <Question id={id}/>
                </li>
              ))}
              </div>
          </div> 
          <div className="card bg-light">
              <div className="card-header">Answered Question</div>
              <div className="card-body">
              {answered.map((id) => (
                  <li key={id}>
                    <Question id={id}/>
                  </li>
                ))}
              </div>
            </div>
        </div>
      )
    }
  }
  
  function mapStateToProps({questions, users, authedUser}) {
    const user = users[authedUser]
    const answered = Object.keys(user.answers)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    return {
      authedUser,    
      answered,
      unanswered : Object.keys(questions).filter(qid => !answered.includes(qid))
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    }
  }
  export default connect(mapStateToProps)(Home)