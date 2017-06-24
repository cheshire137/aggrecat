import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import AccountsPage from './accounts-page.jsx'
import ActivityFeed from './activity-feed.jsx'
import AnonLayout from './anon-layout.jsx'
import NotFound from './not-found.jsx'

const App = function() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={AnonLayout}>
        <IndexRoute component={ActivityFeed} />
        <Route path="accounts" component={AccountsPage} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  )
}

export default App
