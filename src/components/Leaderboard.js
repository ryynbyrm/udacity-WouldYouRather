import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import Card from './Card'

class Leaderboard extends Component {
  render() {
    const { list, authedUser } = this.props 
    if (authedUser === null) {
      return <Redirect to='/login' />
    }
    return (
      <div className="row">
      { list.map((user) => (
        <Card user={user}
        divClass="col-md-4"
        title={`${user.name}`} 
        firstText={"Questions: "+`${user.questionsCount}`}
        secondText={"Answered: "+`${user.answersCount}`}
        thirdText={"Score: "+`${user.answersCount + user.questionsCount}`}></Card>
      ))}
    </div>
    )}
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser,
    list:Object.keys(users).sort(function (a, b) {
      return (users[a].questions.length + users[b].answers.length) - (users[a].questions.length + users[b].answers.length)
    }).map((userId)=>{
        return{
          id: users[userId].id,
          name: users[userId].name,
          avatar: users[userId].avatarURL,
          questionsCount: users[userId].questions.length,
          answersCount: Object.keys(users[userId].answers).length
        }})
  }
}

export default withRouter(connect(mapStateToProps)(Leaderboard)) 

