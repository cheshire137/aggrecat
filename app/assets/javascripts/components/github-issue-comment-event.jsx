import PropTypes from 'prop-types'

import Timestamp from './timestamp.jsx'

const GithubIssueCommentEvent = function(props) {
  const { repo, repoUrl, time, login, userUrl, title,
          url, body } = props

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
          <span> commented on &ldquo;</span>
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
        <blockquote className="github-pr-body">{body}</blockquote>
        <Timestamp time={time} />
      </div>
    </div>
  )
}

GithubIssueCommentEvent.propTypes = {
  repo: PropTypes.string,
  repoUrl: PropTypes.string,
  time: PropTypes.object,
  login: PropTypes.string,
  userUrl: PropTypes.string,
  body: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string
}

export default GithubIssueCommentEvent
