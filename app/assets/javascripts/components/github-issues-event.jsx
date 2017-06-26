import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

import Timestamp from './timestamp.jsx'

const GithubIssuesEvent = function(props) {
  const { repo, repoUrl, time, login, userUrl, title,
          url, action } = props

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
          <span> {action} </span>
          <span>issue &ldquo;</span>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="github-branch-link"
          >{title}</a>
          <span>&rdquo; on </span>
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

GithubIssuesEvent.propTypes = {
  repo: PropTypes.string,
  repoUrl: PropTypes.string,
  time: PropTypes.object,
  login: PropTypes.string,
  userUrl: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  action: PropTypes.string
}

export default GithubIssuesEvent
