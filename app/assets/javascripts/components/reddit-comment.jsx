import PropTypes from 'prop-types'

import RedditUserLink from './reddit-user-link.jsx'
import SubredditLink from './subreddit-link.jsx'

class RedditComment extends React.Component {
  render() {
    const { user, body, subreddit, time } = this.props
    return (
      <div className="box reddit-comment">
        <div className="media-content">
          <div className="content">
            <blockquote className="reddit-comment-body">{body}</blockquote>
          </div>
          <p>
            <SubredditLink subreddit={subreddit} />
            <RedditUserLink user={user} />
            <time className="time">{time.toLocaleDateString()}</time>
          </p>
        </div>
      </div>
    )
  }
}

RedditComment.propTypes = {
  user: PropTypes.string,
  body: PropTypes.string,
  subreddit: PropTypes.string,
  time: PropTypes.object
}

export default RedditComment
