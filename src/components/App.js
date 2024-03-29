import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import Home from '../components/Home'
import Login from '../components/Login'
import Leaderboard from '../components/Leaderboard'
import CreateQuestion from '../components/CreateQuestion'
import Vote from '../components/Vote'
import Navbar from './Navbar'
import PrivateRoute from './PrivateRoute'

class App extends Component {
  componentWillMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Navbar />
            {this.props.loading === true ? null : (
              <div className="container">
                <Route path="/" exact component={Login} />
                <PrivateRoute path="/home" component={Home} />
                <PrivateRoute path="/question/:question_id" component={Vote}/>
                <PrivateRoute path="/add" component={CreateQuestion} />
                <PrivateRoute path="/leaderboard" component={Leaderboard} />
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ loadingBar }) {
  return {
    loading: loadingBar > 0
  }
}

export default connect(mapStateToProps)(App)
