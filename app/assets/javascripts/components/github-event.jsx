import PropTypes from 'prop-types'

import GithubPushEvent from './github-push-event.jsx'
import GithubWatchEvent from './github-watch-event.jsx'

const GithubEvent = function(props) {
  const { item } = props

  if (item.type === 'WatchEvent') {
    return <GithubWatchEvent {...item} />
  }

  if (item.type === 'PushEvent') {
    return <GithubPushEvent {...item} />
  }

  return <p>{item.type}</p>
}

GithubEvent.propTypes = {
  item: PropTypes.object.isRequired
}

export default GithubEvent
