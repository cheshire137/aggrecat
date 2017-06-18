import PropTypes from 'prop-types'

class RedditUserLink extends React.Component {
  render() {
    const { user } = this.props
    const url = `https://reddit.com/u/${encodeURIComponent(user)}`
    return (
      <a href={url} className="reddit-user">/u/{user}</a>
    )
  }
}

RedditUserLink.propTypes = {
  user: PropTypes.string.isRequired
}

export default RedditUserLink
