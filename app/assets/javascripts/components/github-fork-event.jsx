import PropTypes from 'prop-types'

import Timestamp from './timestamp.jsx'

const GithubForkEvent = function(props) {
  const { repo, repoUrl, time, login, userUrl, url,
          fork } = props

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
          <span> forked </span>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="github-repo-link"
          >{repo}</a>
          <span> to </span>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="github-repo-link"
          >{fork}</a>
        </p>
        <Timestamp time={time} />
      </div>
    </div>
  )
}

GithubForkEvent.propTypes = {
  repo: PropTypes.string,
  repoUrl: PropTypes.string,
  time: PropTypes.object,
  login: PropTypes.string,
  userUrl: PropTypes.string,
  fork: PropTypes.string,
  url: PropTypes.string
}

export default GithubForkEvent
