import PropTypes from 'prop-types'

import RedditUserLink from './reddit-user-link.jsx'
import SubredditLink from './subreddit-link.jsx'
import Timestamp from './timestamp.jsx'

class RedditLink extends React.Component {
  render() {
    const { user, url, subreddit, time, title,
            commentsURL, commentCount, nsfw,
            isSelfPost, selfText } = this.props
    return (
      <div className="box reddit-link-container">
        <div className="media-content">
          <div className="content">
            {nsfw ? (
              <acronym title="Not Safe for Work" className="nsfw-label">NSFW</acronym>
            ) : ''}
            <a
              className="reddit-link"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >{title}</a>
            {isSelfPost ? (
              <div
                className="reddit-self-text"
              >{selfText}</div>
            ) : ''}
          </div>
          <p className="reddit-meta clearfix">
            <SubredditLink subreddit={subreddit} />
            <RedditUserLink user={user} />
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="reddit-comments-link"
              href={commentsURL}
            >Comments (<span className="comment-count">{commentCount}</span>)</a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={commentsURL}
              className="reddit-permalink"
            ><Timestamp time={time} /></a>
          </p>
        </div>
      </div>
    )
  }
}

RedditLink.propTypes = {
  title: PropTypes.string,
  user: PropTypes.string,
  subreddit: PropTypes.string,
  url: PropTypes.string,
  commentsURL: PropTypes.string,
  nsfw: PropTypes.bool,
  commentCount: PropTypes.number,
  time: PropTypes.object,
  selfText: PropTypes.string,
  isSelfPost: PropTypes.bool
}

export default RedditLink
