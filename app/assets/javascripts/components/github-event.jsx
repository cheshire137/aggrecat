import PropTypes from 'prop-types'

class GithubEvent extends React.Component {
  render() {
    const { item } = this.props

    return <p>{item.type}</p>
  }
}

GithubEvent.propTypes = {
  item: PropTypes.object.isRequired
}

export default GithubEvent
