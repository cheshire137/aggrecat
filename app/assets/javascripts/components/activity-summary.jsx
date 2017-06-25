import PropTypes from 'prop-types'

class ActivitySummary extends React.Component {
  getSources() {
    const { redditUser, twitterUser, youtubeUser, twitchUser } = this.props
    const sources = []

    if (redditUser) {
      sources.push('Reddit')
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

  onToggleSource(event) {
    const checkbox = event.target
    const source = checkbox.value
    console.log(source, checkbox.checked)
    this.props.onToggleSource(source, checkbox.checked)
  }

  render() {
    const { enabledSources } = this.props
    const sources = this.getSources()
    return (
      <div>
        <p className="has-text-centered activity-summary">
          Pulling activity from:
        </p>
        <form
          className="activity-source-form"
        >
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
      </div>
    )
  }
}

ActivitySummary.propTypes = {
  redditUser: PropTypes.string,
  twitchUser: PropTypes.string,
  twitterUser: PropTypes.string,
  youtubeUser: PropTypes.string,
  onToggleSource: PropTypes.func.isRequired,
  enabledSources: PropTypes.array.isRequired
}

export default ActivitySummary
