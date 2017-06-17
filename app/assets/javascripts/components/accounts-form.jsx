import PropTypes from 'prop-types'

class AccountsForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { twitterUser: props.twitterUser }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ twitterUser: nextProps.twitterUser })
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.onUpdate({
      twitterUser: this.state.twitterUser
    })
  }

  onTwitterUpdate(event) {
    this.setState({ twitterUser: event.target.value })
  }

  render() {
    const { twitterUser } = this.state
    return (
      <section className="section">
        <form onSubmit={e => this.onSubmit(e)}>
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
        </form>
      </section>
    )
  }
}

AccountsForm.propTypes = {
  twitterUser: PropTypes.string,
  onUpdate: PropTypes.func.isRequired
}

export default AccountsForm
