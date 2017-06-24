import PropTypes from 'prop-types'

import { Tweet } from 'react-twitter-widgets'

import AggrecatAPI from '../models/aggrecat-api'
import LocalStorage from '../models/local-storage'

import Header from './header.jsx'
import RedditItem from './reddit-item.jsx'
import YoutubeVideo from './youtube-video.jsx'

class ActivityFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allActivity: [],
      tweets: [],
      twitterUser: LocalStorage.get('twitter-user'),
      redditActivity: [],
      redditUser: LocalStorage.get('reddit-user'),
      youtubeUser: LocalStorage.get('youtube-user'),
      youtubeVideos: []
    }
    this.api = new AggrecatAPI()
  }

  componentDidMount() {
    const { redditUser, twitterUser, youtubeUser } = this.state
    if (twitterUser) {
      this.fetchTweets()
    }
    if (redditUser) {
      this.fetchRedditActivity()
    }
    if (youtubeUser) {
      this.fetchYoutubeVideos()
    }
    if (!twitterUser && !redditUser && !youtubeUser) {
      this.props.router.push('/accounts')
    }
  }

  onRedditActivityLoaded(redditActivity) {
    this.setState({ redditActivity }, () => {
      this.combineActivity()
    })
  }

  onTweetsLoaded(tweets) {
    this.setState({ tweets }, () => {
      this.combineActivity()
    })
  }

  onYoutubeVideosLoaded(youtubeVideos) {
    console.log('youtube', youtubeVideos)
    this.setState({ youtubeVideos }, () => {
      this.combineActivity()
    })
  }

  combineActivity() {
    const { tweets, redditActivity, youtubeVideos } = this.state
    const allActivity = tweets.concat(redditActivity).
      concat(youtubeVideos)
    allActivity.sort((a, b) => {
      if (a.time < b.time) {
        return 1
      }
      return a.time > b.time ? -1 : 0
    })
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

  fetchYoutubeVideos() {
    this.api.getYoutubeVideos(this.state.youtubeUser).
      then(videos => this.onYoutubeVideosLoaded(videos)).
      catch(err => console.error('failed to load YouTube videos', err))
  }

  render() {
    const { allActivity } = this.state
    return (
      <div>
        <Header title="Activity" />
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-8 is-offset-2">
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
                    if (item.source === 'youtube') {
                      return (
                        <li key={item.id}>
                          <YoutubeVideo {...item} />
                        </li>
                      )
                    }
                    return <li key={item.type}>{item.type}</li>
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

ActivityFeed.propTypes = {
  router: PropTypes.object.isRequired
}

export default ActivityFeed
