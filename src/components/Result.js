import React from 'react'
import CardHeader from './CardHeader'
class Result extends React.Component {
    render() {
        const { user, question } = this.props
        const onePerc = parseInt((question.optionOne.votes.length / (question.optionOne.votes.length + question.optionOne.votes.length)) * 100, 10)
        const twoPerc = parseInt((question.optionTwo.votes.length / (question.optionOne.votes.length + question.optionOne.votes.length)) * 100, 10)
        return (
            <div key={user.id} className="col-md-12">
                <div className="card">
                    <CardHeader user={user}></CardHeader> 
                    <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text">
                            A: {question.optionOne.text}
                            {user.answers[question.id] === 'optionOne' ? 
                            (<h6 className="badge badge-success">Your choice</h6>)
                            : ('') 
                            }
                        </p>
                        <p className="card-text">
                            B: {question.optionTwo.text}
                            {user.answers[question.id] === 'optionTwo' ? 
                            (<h6 className="badge badge-success">Your choice</h6>)
                            : ('') 
                            }
                        </p>
                        <div>
                        <br />
                        <p>
                        A: {onePerc}% - {question.optionOne.text} | {question.optionOne.votes.length} votes
                        </p>
                        <p>
                        B: {twoPerc}% - {question.optionTwo.text} | {question.optionTwo.votes.length} votes
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
  }
  
  export default Result