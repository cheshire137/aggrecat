import PropTypes from 'prop-types'

import RedditUserLink from './reddit-user-link.jsx'
import SubredditLink from './subreddit-link.jsx'
import Timestamp from './timestamp.jsx'

const RedditComment = function(props) {
  const { user, body, subreddit, time, url, score } = props

  return (
    <div className="box reddit-comment">
      <div className="media-content">
        <div className="content">
          <blockquote className="reddit-comment-body">{body}</blockquote>
        </div>
        <p className="reddit-meta clearfix">
          <SubredditLink subreddit={subreddit} />
          <RedditUserLink user={user} />
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="reddit-comment-score"
            href={url}
          >{score} {score === 1 ? 'point' : 'points'}</a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="reddit-permalink"
            href={url}
          ><Timestamp time={time} /></a>
        </p>
      </div>
    </div>
  )
}

RedditComment.propTypes = {
  user: PropTypes.string,
  score: PropTypes.number,
  body: PropTypes.string,
  subreddit: PropTypes.string,
  time: PropTypes.object,
  url: PropTypes.string
}

export default RedditComment
