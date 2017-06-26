import PropTypes from 'prop-types'

import Timestamp from './timestamp.jsx'

const GithubWatchEvent = function(props) {
  const { action, repo, url, time, login, userUrl } = props

  return (
    <div className="card">
      <div className="card-content">
        <p>
          <a
            className="github-login"
            href={userUrl}
            target="_blank"
            rel="noopener noreferrer"
          >{login}</a>
          <span
            className="github-action"
          > {action === 'started' ? 'starred' : 'unstarred'} </span>
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
  login: PropTypes.string,
  userUrl: PropTypes.string,
  action: PropTypes.string,
  url: PropTypes.string,
  time: PropTypes.object
}

export default GithubWatchEvent
