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
          {title ? (
            <span className="nav-item">{title}</span>
          ) : ''}
        </div>
      </nav>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
