import LocalStorage from '../models/local-storage'

class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      authenticityToken: LocalStorage.get('authenticity-token')
    }
  }

  render() {
    const { authenticityToken } = this.state

    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-4 is-offset-4">
              <form
                action="/users/sign_in"
                method="post"
              >
                <input name="authenticity_token" type="hidden" value={authenticityToken} />
                <div className="field">
                  <label
                    htmlFor="email"
                    className="label"
                  >Email address</label>
                  <p className="control">
                    <input
                      id="email"
                      className="input"
                      type="text"
                      name="user[email]"
                      placeholder="@"
                    />
                  </p>
                </div>
                <div className="field">
                  <label
                    htmlFor="password"
                    className="label"
                  >Password</label>
                  <p className="control">
                    <input
                      id="password"
                      name="user[password]"
                      className="input"
                      type="password"
                    />
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <button
                      className="button is-primary"
                      type="submit"
                    >Sign in</button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

LoginPage.propTypes = {
}

export default LoginPage
