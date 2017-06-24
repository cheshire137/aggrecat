import PropTypes from 'prop-types'

import RedditUserLink from './reddit-user-link.jsx'
import SubredditLink from './subreddit-link.jsx'
import Timestamp from './timestamp.jsx'

class RedditLink extends React.Component {
  render() {
    const { user, url, subreddit, time, title, domain,
            commentsURL, commentCount, nsfw } = this.props
    return (
      <div className="box reddit-link-container">
        <div className="media-content">
          <div className="content">
            {nsfw ? (
              <acronym title="Not Safe for Work" className="nsfw-label">NSFW</acronym>
            ) : ''}
            <a className="reddit-link" href={url}>{title}</a>
            <a className="reddit-comments-link" href={commentsURL}>Comments</a>
          </div>
          <p>
            <SubredditLink subreddit={subreddit} />
            <RedditUserLink user={user} />
            <span className="comment-count">{commentCount}</span>
            <Timestamp time={time} />
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
  domain: PropTypes.string,
  url: PropTypes.string,
  commentsURL: PropTypes.string,
  nsfw: PropTypes.bool,
  commentCount: PropTypes.number,
  time: PropTypes.object
}

export default RedditLink
