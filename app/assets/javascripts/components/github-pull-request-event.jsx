import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

import Timestamp from './timestamp.jsx'

const GithubPullRequestEvent = function(props) {
  const { repo, repoUrl, time, login, userUrl, title,
          pullRequestUrl, body, action } = props

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
          <span>a pull request &ldquo;</span>
          <a
            href={pullRequestUrl}
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
        {body && body.length > 0 ? (
          <blockquote
            className="github-pr-body"
          ><ReactMarkdown source={body} escapeHtml /></blockquote>
        ) : ''}
        <Timestamp time={time} />
      </div>
    </div>
  )
}

GithubPullRequestEvent.propTypes = {
  repo: PropTypes.string,
  repoUrl: PropTypes.string,
  time: PropTypes.object,
  login: PropTypes.string,
  userUrl: PropTypes.string,
  title: PropTypes.string,
  pullRequestUrl: PropTypes.string,
  body: PropTypes.string,
  action: PropTypes.string
}

export default GithubPullRequestEvent
