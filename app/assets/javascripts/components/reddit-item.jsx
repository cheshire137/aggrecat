import PropTypes from 'prop-types'

import RedditComment from './reddit-comment.jsx'
import RedditLink from './reddit-link.jsx'

class RedditItem extends React.Component {
  render() {
    const { item } = this.props
    if (item.type === 'comment') {
      return <RedditComment {...item} />
    }
    if (item.type === 'link') {
      return <RedditLink {...item} />
    }
    return <p>{item.type}</p>
  }
}

RedditItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default RedditItem
