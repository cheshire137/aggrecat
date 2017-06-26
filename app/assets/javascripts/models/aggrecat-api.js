import Fetcher from './fetcher'

export default class AggrecatAPI extends Fetcher {
  constructor() {
    super('/api')

    const tokenMeta = document.querySelector('meta[name="csrf-token"]')
    this.token = tokenMeta.content

    this.defaultHeaders = {
      'X-CSRF-TOKEN': this.token,
      'Content-type': 'application/json'
    }
  }

  getGithubEvents(user) {
    const path = `/github-events?user=${encodeURIComponent(user)}`
    return this.get(path, this.defaultHeaders).then(events =>
      events.map(event => AggrecatAPI.setTime(event))
    )
  }

  getRedditActivity(user, category) {
    let path = `/reddit-activity?user=${encodeURIComponent(user)}`
    if (category) {
      path += `&category=${encodeURIComponent(category)}`
    }
    return this.get(path, this.defaultHeaders).then(activity =>
      activity.map(item => AggrecatAPI.setTime(item))
    )
  }

  getTweets(user) {
    const path = `/tweets?user=${encodeURIComponent(user)}`
    return this.get(path, this.defaultHeaders).then(tweets =>
      tweets.map(tweet => AggrecatAPI.setTime(tweet))
    )
  }

  getTwitchStreamer(user) {
    const path = `/twitch-streamer?user=${encodeURIComponent(user)}`
    return this.get(path, this.defaultHeaders).then(data => {
      data.videos = data.videos.map(vid => AggrecatAPI.setTime(vid))
      return data
    })
  }

  getUser() {
    return this.get('/user', this.defaultHeaders).
      then(json => json.user)
  }

  getYoutubeVideos(user) {
    const path = `/youtube-videos?user=${encodeURIComponent(user)}`
    return this.get(path, this.defaultHeaders).then(videos =>
      videos.map(video => AggrecatAPI.setTime(video))
    )
  }

  static setTime(item) {
    item.time = new Date(item.time)
    return item
  }
}
