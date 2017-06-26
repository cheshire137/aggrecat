import PropTypes from 'prop-types'

import Footer from './footer.jsx'

const AnonLayout = function(props) {
  return (
    <div className="layout-container">
      <div className="layout-children-container">
        <div className="container">
          <nav className="nav">
            <div className="nav-left">
              <a
                className="nav-item is-brand"
                href="/"
              >&gt;^..^&lt; Aggrecat</a>
            </div>
          </nav>
        </div>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

AnonLayout.propTypes = {
  children: PropTypes.object.isRequired
}

export default AnonLayout
