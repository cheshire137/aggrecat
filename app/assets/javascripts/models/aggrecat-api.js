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

  getTweets(user) {
    const path = `/tweets?user=${encodeURIComponent(user)}`
    return this.get(path, this.defaultHeaders)
  }
}
