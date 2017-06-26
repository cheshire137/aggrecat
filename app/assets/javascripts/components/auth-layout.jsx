import PropTypes from 'prop-types'

import Footer from './footer.jsx'

const AuthLayout = function(props) {
  return (
    <div className="layout-container">
      <div className="layout-children-container">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.object.isRequired
}

export default AuthLayout
