import PropTypes from 'prop-types'

import { Tweet } from 'react-twitter-widgets'

import AggrecatAPI from '../models/aggrecat-api'
import LocalStorage from '../models/local-storage'

import ActivitySummary from './activity-summary.jsx'
import GithubEvent from './github-event.jsx'
import Header from './header.jsx'
import RedditItem from './reddit-item.jsx'
import TwitchVideo from './twitch-video.jsx'
import YoutubeVideo from './youtube-video.jsx'

class ActivityFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allActivity: [],
      tweets: [],
      twitchUser: LocalStorage.get('twitch-user'),
      twitchVideos: [],
      twitchChannel: null,
      twitterUser: LocalStorage.get('twitter-user'),
      redditActivity: [],
      redditUser: LocalStorage.get('reddit-user'),
      youtubeUser: LocalStorage.get('youtube-user'),
      youtubeVideos: [],
      githubEvents: [],
      githubUser: LocalStorage.get('github-user'),
      enabledSources: LocalStorage.get('enabled-sources') ||
        ['Twitch', 'Reddit', 'YouTube', 'Twitter', 'GitHub']
    }
    this.api = new AggrecatAPI()
  }

  componentDidMount() {
    const { redditUser, twitchUser, twitterUser,
            youtubeUser, githubUser } = this.state

    if (twitchUser) {
      this.fetchTwitchStreamer()
    }

    if (twitterUser) {
      this.fetchTweets()
    }

    if (redditUser) {
      this.fetchRedditActivity()
    }

    if (youtubeUser) {
      this.fetchYoutubeVideos()
    }

    if (githubUser) {
      this.fetchGithubEvents()
    }

    if (!twitterUser && !redditUser && !youtubeUser && !githubUser) {
      this.props.router.push('/accounts')
    }
  }

  onGithubEventsLoaded(githubEvents) {
    this.setState({ githubEvents }, () => {
      this.combineActivity()
    })
  }

  onRedditActivityLoaded(redditActivity) {
    this.setState({ redditActivity }, () => {
      this.combineActivity()
    })
  }

  onToggleSource(source, enabled) {
    const sources = this.state.enabledSources.slice(0)
    const index = sources.indexOf(source)

    if (enabled && index < 0) {
      sources.push(source)
    } else if (!enabled && index > -1) {
      delete sources[index]
    }

    this.setState({ enabledSources: sources }, () => {
      LocalStorage.set('enabled-sources', sources)
      this.combineActivity()
    })
  }

  onTweetsLoaded(tweets) {
    this.setState({ tweets }, () => {
      this.combineActivity()
    })
  }

  onTwitchStreamerLoaded(data) {
    this.setState({
      twitchChannel: data.channel,
      twitchVideos: data.videos
    }, () => {
      this.combineActivity()
    })
  }

  onYoutubeVideosLoaded(youtubeVideos) {
    this.setState({ youtubeVideos }, () => {
      this.combineActivity()
    })
  }

  combineActivity() {
    const { tweets, redditActivity, twitchVideos,
            youtubeVideos, enabledSources,
            githubEvents } = this.state
    let allActivity = []

    if (enabledSources.indexOf('YouTube') > -1) {
      allActivity = allActivity.concat(youtubeVideos)
    }
    if (enabledSources.indexOf('GitHub') > -1) {
      allActivity = allActivity.concat(githubEvents)
    }
    if (enabledSources.indexOf('Reddit') > -1) {
      allActivity = allActivity.concat(redditActivity)
    }
    if (enabledSources.indexOf('Twitter') > -1) {
      allActivity = allActivity.concat(tweets)
    }
    if (enabledSources.indexOf('Twitch') > -1) {
      allActivity = allActivity.concat(twitchVideos)
    }

    allActivity.sort((a, b) => {
      if (a.time < b.time) {
        return 1
      }
      return a.time > b.time ? -1 : 0
    })

    this.setState({ allActivity })
  }

  fetchGithubEvents() {
    this.api.getGithubEvents(this.state.githubUser).
      then(events => this.onGithubEventsLoaded(events)).
      catch(err => console.error('failed to load GitHub events', err))
  }

  fetchRedditActivity() {
    this.api.getRedditActivity(this.state.redditUser).
      then(activity => this.onRedditActivityLoaded(activity)).
      catch(err => console.error('failed to load Reddit activity', err))
  }

  fetchTwitchStreamer() {
    this.api.getTwitchStreamer(this.state.twitchUser).
      then(data => this.onTwitchStreamerLoaded(data)).
      catch(err => console.error('failed to load Twitch streamer', err))
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
    const { allActivity, redditUser, twitterUser, twitchUser,
            youtubeUser, twitchChannel, enabledSources,
            githubUser } = this.state
    return (
      <div>
        <Header title="Activity" />
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column content is-8 is-offset-2">
                <ActivitySummary
                  redditUser={redditUser}
                  twitterUser={twitterUser}
                  youtubeUser={youtubeUser}
                  githubUser={githubUser}
                  twitchUser={twitchUser}
                  enabledSources={enabledSources}
                  onToggleSource={(s, e) => this.onToggleSource(s, e)}
                />
                <ul className="activity-list">
                  {allActivity.map(item => {
                    if (item.source === 'twitter') {
                      return (
                        <li className="tweet-container" key={item.id}>
                          <Tweet tweetId={item.id} />
                        </li>
                      )
                    }

                    if (item.source === 'reddit') {
                      return (
                        <li className="reddit-container" key={item.id}>
                          <RedditItem item={item} />
                        </li>
                      )
                    }

                    if (item.source === 'youtube') {
                      return (
                        <li className="youtube-container" key={item.id}>
                          <YoutubeVideo {...item} />
                        </li>
                      )
                    }

                    if (item.source === 'twitch') {
                      return (
                        <li className="twitch-container" key={item.id}>
                          <TwitchVideo
                            channel={twitchChannel}
                            {...item}
                          />
                        </li>
                      )
                    }

                    if (item.source === 'github') {
                      return (
                        <li className="github-container" key={item.id}>
                          <GithubEvent item={item} />
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
