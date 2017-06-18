import PropTypes from 'prop-types'
import { Tweet } from 'react-twitter-widgets'

import AggrecatAPI from '../models/aggrecat-api'

import AccountsForm from './accounts-form.jsx'
import RedditItem from './reddit-item.jsx'

class ActivityFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allActivity: [],
      tweets: [],
      twitterUser: 'cheshire137',
      redditActivity: [],
      redditUser: 'cheshire137'
    }
    this.api = new AggrecatAPI()
  }

  componentDidMount() {
    if (this.state.twitterUser) {
      this.fetchTweets()
    }
    if (this.state.redditUser) {
      this.fetchRedditActivity()
    }
  }

  onAccountsUpdate(accounts) {
    if (accounts.twitterUser) {
      this.setState({ twitterUser: accounts.twitterUser }, () => {
        this.fetchTweets()
      })
    }
    if (accounts.redditUser) {
      this.setState({ redditUser: accounts.redditUser }, () => {
        this.fetchRedditActivity()
      })
    }
  }

  onRedditActivityLoaded(redditActivity) {
    console.log('reddit', redditActivity.map(i => i.type).join(', '), redditActivity)
    this.setState({ redditActivity }, () => {
      this.combineActivity()
    })
  }

  onTweetsLoaded(tweets) {
    this.setState({ tweets }, () => {
      this.combineActivity()
    })
  }

  combineActivity() {
    const { tweets, redditActivity } = this.state
    const allActivity = tweets.concat(redditActivity)
    if (tweets.length > 0 && redditActivity.length > 0) {
      allActivity.sort((a, b) => {
        if (a.time < b.time) {
          return 1
        }
        return a.time > b.time ? -1 : 0
      })
    }
    this.setState({ allActivity })
  }

  fetchRedditActivity() {
    this.api.getRedditActivity(this.state.redditUser).
      then(activity => this.onRedditActivityLoaded(activity)).
      catch(err => console.error('failed to load Reddit activity', err))
  }

  fetchTweets() {
    this.api.getTweets(this.state.twitterUser).
      then(tweets => this.onTweetsLoaded(tweets)).
      catch(err => console.error('failed to load Tweets', err))
  }

  render() {
    const { allActivity, twitterUser } = this.state
    return (
      <div>
        <AccountsForm
          twitterUser={twitterUser}
          onUpdate={accounts => this.onAccountsUpdate(accounts)}
        />
        <ul>
          {allActivity.map(item => {
            if (item.source === 'twitter') {
              return (
                <li key={item.id}>
                  <Tweet tweetId={item.id} />
                </li>
              )
            }
            if (item.source === 'reddit') {
              return (
                <li key={item.id}>
                  <RedditItem item={item} />
                </li>
              )
            }
            return (
              <li key={item.type}>
                {item.type}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

ActivityFeed.propTypes = {
}

export default ActivityFeed
