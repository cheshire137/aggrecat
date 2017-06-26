import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import AccountsPage from './accounts-page.jsx'
import ActivityFeed from './activity-feed.jsx'
import AnonLayout from './anon-layout.jsx'
import AuthLayout from './auth-layout.jsx'
import LoginPage from './login-page.jsx'
import NotFound from './not-found.jsx'

import AggrecatAPI from '../models/aggrecat-api'
import LocalStorage from '../models/local-storage'

function requireAuth(nextState, replace, callback) {
  const api = new AggrecatAPI()

  api.getUser().then(json => {
    LocalStorage.set('authenticity-token', json.authenticityToken)

    if (json.auth) {
      LocalStorage.set('email', json.email)
    } else {
      LocalStorage.delete('email')

      replace({
        pathname: '/',
        state: { nextPathname: nextState.location.pathname }
      })
    }
  }).then(callback)
}

function redirectIfSignedIn(nextState, replace, callback) {
  const newPath = `/user${nextState.location.pathname}`

  if (LocalStorage.has('email')) {
    const email = LocalStorage.get('email')
    if (email && email.length > 0) {
      replace({
        pathname: newPath,
        state: { nextPathname: nextState.location.pathname }
      })

      callback()
      return
    }
  }

  const api = new AggrecatAPI()
  api.getUser().then(json => {
    LocalStorage.set('authenticity-token', json.authenticityToken)

    if (json.auth) {
      LocalStorage.set('email', json.email)

      replace({
        pathname: newPath,
        state: { nextPathname: nextState.location.pathname }
      })
    } else {
      LocalStorage.delete('email')
    }
  }).then(callback)
}

const App = function() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={AnonLayout} onEnter={redirectIfSignedIn}>
        <IndexRoute component={LoginPage} />
      </Route>
      <Route path="/user" component={AuthLayout} onEnter={requireAuth}>
        <IndexRoute component={ActivityFeed} />
        <Route path="accounts" component={AccountsPage} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  )
}

export default App
