import PropTypes from 'prop-types'

import Footer from './footer.jsx'

const AnonLayout = function(props) {
  return (
    <div className="layout-container">
      <div className="layout-children-container">
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
