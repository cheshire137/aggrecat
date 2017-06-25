import PropTypes from 'prop-types'

import Timestamp from './timestamp.jsx'

const GithubWatchEvent = function(props) {
  const { action, repo, url, time } = props

  return (
    <div className="card">
      <div className="card-content">
        <p>
          <span
            className="github-action"
          >{action === 'started' ? 'Starred' : 'Unstarred'} </span>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="github-repo-link"
          >{repo}</a>
        </p>
        <Timestamp time={time} />
      </div>
    </div>
  )
}

GithubWatchEvent.propTypes = {
  repo: PropTypes.string,
  action: PropTypes.string,
  url: PropTypes.string,
  time: PropTypes.object
}

export default GithubWatchEvent
