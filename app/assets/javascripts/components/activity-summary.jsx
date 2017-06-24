import PropTypes from 'prop-types'

const ActivitySummary = function(props) {
  const { redditUser, twitterUser, youtubeUser } = props
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
  let sourceSentence = sources[0]
  if (sources.length === 2) {
    sourceSentence = `${sources[0]} and ${sources[1]}`
  } else if (sources.length > 2) {
    for (let i = 1; i < sources.length - 1; i++) {
      sourceSentence += `, ${sources[i]}`
    }
    sourceSentence += `, and ${sources[sources.length - 1]}`
  }
  return (
    <p className="has-text-centered activity-summary">
      Pulling activity from {sourceSentence}:
    </p>
  )
}

ActivitySummary.propTypes = {
  redditUser: PropTypes.string,
  twitterUser: PropTypes.string,
  youtubeUser: PropTypes.string
}

export default ActivitySummary
