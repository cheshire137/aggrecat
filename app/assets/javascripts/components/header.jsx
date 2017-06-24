import PropTypes from 'prop-types'

const Header = function(props) {
  const { title } = props
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
      </nav>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
