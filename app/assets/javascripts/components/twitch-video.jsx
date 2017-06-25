import PropTypes from 'prop-types'

import Timestamp from './timestamp.jsx'

class TwitchVideo extends React.Component {
  render() {
    const { channel, title, description, url, image, views,
            time, id } = this.props
    return (
      <div className="box twitch-video">
        <div className="media-content">
          <div className="content">
            <p className="clearfix">
              <span
                className="twitch-view-count"
              >{views} {views === 1 ? 'view' : 'views'}</span>
              <strong className="twitch-video-title">
                {title}
              </strong>
            </p>
            <iframe
              src={`http://player.twitch.tv/?video=${id}&autoplay=false`}
              width="560"
              height="315"
              frameBorder="0"
              scrolling="no"
              className="twitch-video"
              allowFullScreen
            />
            {description && description.length > 0 ? (
              <p
                className="twitch-description"
              >{description}</p>
            ) : ''}
            <p className="twitch-meta">
              <a
                className="twitch-permalink"
                href={url}
              ><Timestamp time={time} /></a>
              <a
                href={channel.url}
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
