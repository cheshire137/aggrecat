import PropTypes from 'prop-types'

class ActivitySummary extends React.Component {
  onToggleSource(event) {
    const checkbox = event.target
    const source = checkbox.value
    this.props.onToggleSource(source, checkbox.checked)
  }

  getSources() {
    const { redditUser, twitterUser, youtubeUser, twitchUser,
            githubUser } = this.props
    const sources = []

    if (redditUser) {
      sources.push('Reddit')
    }
    if (githubUser) {
      sources.push('GitHub')
    }
    if (twitterUser) {
      sources.push('Twitter')
    }
    if (youtubeUser) {
      sources.push('YouTube')
    }
    if (twitchUser) {
      sources.push('Twitch')
    }

    return sources
  }

  render() {
    const { enabledSources } = this.props
    const sources = this.getSources()
    return (
      <form
        className="activity-source-form"
      >
        <span className="activity-source-prefix">Pulling activity from:</span>
        {sources.map(source => (
          <label
            className="checkbox"
            htmlFor={source}
            key={source}
          >
            <input
              type="checkbox"
              id={source}
              value={source}
              checked={enabledSources.indexOf(source) > -1}
              onChange={e => this.onToggleSource(e)}
            />
            {source}
          </label>
        ))}
      </form>
    )
  }
}

ActivitySummary.propTypes = {
  redditUser: PropTypes.string,
  twitchUser: PropTypes.string,
  twitterUser: PropTypes.string,
  youtubeUser: PropTypes.string,
  onToggleSource: PropTypes.func.isRequired,
  enabledSources: PropTypes.array.isRequired,
  githubUser: PropTypes.string
}

export default ActivitySummary
