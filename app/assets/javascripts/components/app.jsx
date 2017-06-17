import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import ActivityFeed from './activity-feed.jsx'
import AnonLayout from './anon-layout.jsx'
import NotFound from './not-found.jsx'

const App = function() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={AnonLayout}>
        <IndexRoute component={ActivityFeed} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  )
}

export default App
