import PropTypes from 'prop-types'

import Timestamp from './timestamp.jsx'

class TwitchVideo extends React.Component {
  render() {
    const { channel, title, description, url, image, views,
            time } = this.props
    return (
      <div className="box twitch-video">
        <div className="media-content">
          <div className="content">
            <p className="clearfix">
              <span
                className="twitch-view-count"
              >{views} {views === 1 ? 'view' : 'views'}</span>
              <a
                className="twitch-video-title"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >{title}</a>
            </p>
            <p className="has-text-centered">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              ><img
                src={image}
                width="320"
                height="180"
                alt={title}
              /></a>
            </p>
            {description && description.length > 0 ? (
              <p
                className="twitch-description"
              >{description}</p>
            ) : ''}
            <p className="twitch-meta">
              <a
                className="twitch-permalink"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              ><Timestamp time={time} /></a>
              <a
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="twitch-channel-name"
              >{channel.name}</a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

TwitchVideo.propTypes = {
  channel: PropTypes.object.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.string,
  views: PropTypes.number,
  time: PropTypes.object
}

export default TwitchVideo
