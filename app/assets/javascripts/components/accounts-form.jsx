import PropTypes from 'prop-types'

class AccountsForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      twitterUser: props.twitterUser || '',
      redditUser: props.redditUser || ''
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      twitterUser: nextProps.twitterUser || '',
      redditUser: nextProps.redditUser || ''
    })
  }

  onSubmit(event) {
    event.preventDefault()

    const { redditUser, twitterUser } = this.state

    this.props.onUpdate({
      twitterUser: twitterUser.replace(/^@/, ''),
      redditUser
    })
  }

  onRedditUpdate(event) {
    this.setState({ redditUser: event.target.value })
  }

  onTwitterUpdate(event) {
    this.setState({ twitterUser: event.target.value })
  }

  render() {
    const { redditUser, twitterUser } = this.state
    return (
      <section className="section is-subtle is-inset is-small">
        <div className="container">
          <form onSubmit={e => this.onSubmit(e)}>
            <div className="columns">
              <div className="column is-6 is-offset-3">
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
  onUpdate: PropTypes.func.isRequired
}

export default AccountsForm
