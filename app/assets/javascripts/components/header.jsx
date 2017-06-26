import PropTypes from 'prop-types'

import LocalStorage from '../models/local-storage'

const Header = function(props) {
  const { title } = props
  const email = LocalStorage.get('email')
  const authenticityToken = LocalStorage.get('authenticity-token')

  return (
    <div className="container">
      <nav className="nav">
        <div className="nav-left">
          <a
            className="nav-item is-brand"
            href="/"
          >&gt;^..^&lt; Aggrecat</a>
          <a
            href="/"
            className={`nav-item ${title === 'Activity' ? 'is-active' : ''}`}
          >Activity</a>
          <a
            href="/accounts"
            className={`nav-item ${title === 'Accounts' ? 'is-active' : ''}`}
          >Accounts</a>
        </div>
        <div className="nav-right">
          <span
            className="nav-item"
          >{email}</span>
          <form
            className="nav-item"
            action="/users/sign_out"
            method="post"
          >
            <input name="_method" type="hidden" value="delete" />
            <input name="authenticity_token" type="hidden" value={authenticityToken} />
            <button
              className="button is-white"
              type="submit"
              onClick={() => LocalStorage.delete('email')}
            >Sign out</button>
          </form>
        </div>
      </nav>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
