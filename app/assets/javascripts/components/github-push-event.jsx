import PropTypes from 'prop-types'

import Timestamp from './timestamp.jsx'

const GithubPushEvent = function(props) {
  const { commitCount, repo, repoUrl, commits, time,
          login, userUrl } = props

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
          <span> pushed {commitCount} {commitCount === 1 ? 'commit' : 'commits'} to </span>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="github-repo-link"
          >{repo}</a>:
        </p>
        <ul className="github-commit-message-list">
          {commits.map(commit => (
            <li key={commit.sha}>
              <a
                className="git-commit-link"
                target="_blank"
                rel="noopener noreferrer"
                href={commit.url}
              >
                {commit.message} &mdash; <code className="git-sha">{commit.shortSha}</code>
              </a>
            </li>
          ))}
        </ul>
        <Timestamp time={time} />
      </div>
    </div>
  )
}

GithubPushEvent.propTypes = {
  repo: PropTypes.string,
  commitCount: PropTypes.number,
  repoUrl: PropTypes.string,
  commits: PropTypes.array,
  time: PropTypes.object,
  login: PropTypes.string,
  userUrl: PropTypes.string
}

export default GithubPushEvent
