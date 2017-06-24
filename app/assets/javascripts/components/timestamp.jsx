import PropTypes from 'prop-types'

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
  'Oct', 'Nov', 'Dec'
]

const Timestamp = function(props) {
  const { time } = props
  const day = time.getDate()
  const month = months[time.getMonth()]
  const year = time.getFullYear()
  return (
    <time className="time">{day} {month} {year}</time>
  )
}

Timestamp.propTypes = {
  time: PropTypes.object.isRequired
}

export default Timestamp
