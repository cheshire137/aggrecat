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

  static setTime(item) {
    item.time = new Date(item.time)
    return item
  }
}
