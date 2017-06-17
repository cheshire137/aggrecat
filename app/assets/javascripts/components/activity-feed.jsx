import PropTypes from 'prop-types'

import AggrecatAPI from '../models/aggrecat-api'

import { Tweet } from 'react-twitter-widgets'

class ActivityFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tweets: [] }
  }

  componentDidMount() {
    const api = new AggrecatAPI()
    api.getTweets('cheshire137').
      then(tweets => this.onTweetsLoaded(tweets)).
      catch(err => console.error('failed to load Tweets', err))
  }

  onTweetsLoaded(tweets) {
    this.setState({ tweets })
  }

  render() {
    const { tweets } = this.state
    return (
      <ul>
        {tweets.map(tweet => (
          <li key={tweet.id}>
            <Tweet tweetId={tweet.id} />
          </li>
        ))}
      </ul>
    )
  }
}

ActivityFeed.propTypes = {
}

export default ActivityFeed
