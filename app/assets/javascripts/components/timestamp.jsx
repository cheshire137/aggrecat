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
  let minute = time.getMinutes()
  if (minute < 10) {
    minute = `0${minute}`
  }
  let hour = time.getHours()
  let amPM = 'AM'
  if (hour > 12) {
    hour -= 12
    amPM = 'PM'
  }
  return (
    <time className="time">{hour}:{minute} {amPM} - {day} {month} {year}</time>
  )
}

Timestamp.propTypes = {
  time: PropTypes.object.isRequired
}

export default Timestamp
