import PropTypes from 'prop-types'

class AccountsForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      twitterUser: props.twitterUser || '',
      redditUser: props.redditUser || '',
      youtubeUser: props.youtubeUser || '',
      twitchUser: props.twitchUser || ''
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      twitterUser: nextProps.twitterUser || '',
      redditUser: nextProps.redditUser || '',
      youtubeUser: nextProps.youtubeUser || '',
      twitchUser: nextProps.twitchUser || ''
    })
  }

  onSubmit(event) {
    event.preventDefault()

    const { redditUser, twitterUser, youtubeUser,
            twitchUser } = this.state

    this.props.onUpdate({
      twitterUser: twitterUser.replace(/^@/, ''),
      redditUser,
      youtubeUser,
      twitchUser
    })
  }

  onRedditUpdate(event) {
    this.setState({ redditUser: event.target.value })
  }

  onTwitchUpdate(event) {
    this.setState({ twitchUser: event.target.value })
  }

  onTwitterUpdate(event) {
    this.setState({ twitterUser: event.target.value })
  }

  onYoutubeUpdate(event) {
    this.setState({ youtubeUser: event.target.value })
  }

  render() {
    const { redditUser, twitterUser, youtubeUser,
            twitchUser } = this.state
    return (
      <section className="section">
        <div className="container">
          <form onSubmit={e => this.onSubmit(e)}>
            <div className="columns">
              <div className="content column is-6 is-offset-3">
                <p className="has-text-centered">
                  Enter user names to build an activity feed:
                </p>
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label
                      htmlFor="reddit_user"
                      className="label"
                    >Reddit</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="Reddit user"
                          id="reddit_user"
                          value={redditUser}
                          onChange={e => this.onRedditUpdate(e)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label
                      htmlFor="twitch_user"
                      className="label"
                    >Twitch</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="Twitch channel"
                          id="twitch_user"
                          value={twitchUser}
                          onChange={e => this.onTwitchUpdate(e)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label
                      htmlFor="twitter_user"
                      className="label"
                    >Twitter</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="Twitter user"
                          id="twitter_user"
                          value={twitterUser}
                          onChange={e => this.onTwitterUpdate(e)}
                        />
                      </div>
                      <p className="help">No leading <code>@</code>, please</p>
                    </div>
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label
                      htmlFor="youtube_user"
                      className="label"
                    >YouTube</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="YouTube user"
                          id="youtube_user"
                          value={youtubeUser}
                          onChange={e => this.onYoutubeUpdate(e)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-label" />
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <button type="submit" className="button is-primary">
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

AccountsForm.propTypes = {
  redditUser: PropTypes.string,
  twitterUser: PropTypes.string,
  onUpdate: PropTypes.func.isRequired,
  youtubeUser: PropTypes.string,
  twitchUser: PropTypes.string
}

export default AccountsForm
