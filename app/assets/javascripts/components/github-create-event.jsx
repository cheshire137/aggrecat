import PropTypes from 'prop-types'

import Timestamp from './timestamp.jsx'

const GithubCreateEvent = function(props) {
  const { repo, repoUrl, time, login, userUrl, branchUrl,
          branch } = props

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
          <span> created </span>
          {branch ? (
            <span>
              <span>branch </span>
              <a
                href={branchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="github-branch-link"
              >{branch}</a>
              <span> on </span>
            </span>
          ) : ''}
          <a
            href={repoUrl}
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

GithubCreateEvent.propTypes = {
  repo: PropTypes.string,
  repoUrl: PropTypes.string,
  time: PropTypes.object,
  login: PropTypes.string,
  userUrl: PropTypes.string,
  branch: PropTypes.string,
  branchUrl: PropTypes.string
}

export default GithubCreateEvent
