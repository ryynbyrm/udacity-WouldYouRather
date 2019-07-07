import {
  _getQuestions,
  _getUsers
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getQuestions(),
    _getUsers()
  ]).then(([ questions, users ]) => ({
    questions,
    users
  }))
}
/* Private Route: https://tylermcginnis.com/react-router-protected-routes-authentication/ */
export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // fake async
  }
}
