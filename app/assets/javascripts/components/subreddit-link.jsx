import PropTypes from 'prop-types'

class SubredditLink extends React.Component {
  render() {
    const { subreddit } = this.props
    const url = `https://reddit.com/r/${encodeURIComponent(subreddit)}`
    return (
      <a
        href={url}
        className="subreddit"
        target="_blank"
        rel="noopener noreferrer"
      >/r/{subreddit}</a>
    )
  }
}

SubredditLink.propTypes = {
  subreddit: PropTypes.string.isRequired
}

export default SubredditLink
