import PropTypes from 'prop-types'

import GithubWatchEvent from './github-watch-event.jsx'

const GithubEvent = function(props) {
  const { item } = props

  if (item.type === 'WatchEvent') {
    return <GithubWatchEvent {...item} />
  }

  return <p>{item.type}</p>
}

GithubEvent.propTypes = {
  item: PropTypes.object.isRequired
}

export default GithubEvent
