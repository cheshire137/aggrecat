import PropTypes from 'prop-types'
import { Tweet } from 'react-twitter-widgets'

import AggrecatAPI from '../models/aggrecat-api'

import AccountsForm from './accounts-form.jsx'

class ActivityFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tweets: [], twitterUser: 'cheshire137' }
  }

  componentDidMount() {
    if (this.state.twitterUser) {
      this.fetchTweets()
    }
  }

  onAccountsUpdate(accounts) {
    this.setState({ twitterUser: accounts.twitterUser }, () => {
      this.fetchTweets()
    })
  }

  onTweetsLoaded(tweets) {
    this.setState({ tweets })
  }

  fetchTweets(user) {
    const api = new AggrecatAPI()
    api.getTweets(this.state.twitterUser).
      then(tweets => this.onTweetsLoaded(tweets)).
      catch(err => console.error('failed to load Tweets', err))
  }

  render() {
    const { tweets, twitterUser } = this.state
    return (
      <div>
        <AccountsForm
          twitterUser={twitterUser}
          onUpdate={accounts => this.onAccountsUpdate(accounts)}
        />
        <ul>
          {tweets.map(tweet => (
            <li key={tweet.id}>
              <Tweet tweetId={tweet.id} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

ActivityFeed.propTypes = {
}

export default ActivityFeed
