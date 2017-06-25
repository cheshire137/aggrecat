import PropTypes from 'prop-types'

import Timestamp from './timestamp.jsx'

class YoutubeVideo extends React.Component {
  render() {
    const { time, url, title, description, embedUrl } = this.props
    return (
      <div className="box youtube-video">
        <div className="media-content">
          <div className="content">
            <iframe
              width="560"
              height="315"
              src={embedUrl}
              frameBorder="0"
              allowFullScreen
            />
            {description && description.length > 0 ? (
              <p
                className="youtube-description"
              >{description}</p>
            ) : ''}
          </div>
          <a
            title={title}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          ><Timestamp time={time} /></a>
        </div>
      </div>
    )
  }
}

YoutubeVideo.propTypes = {
  embedUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  time: PropTypes.object,
  url: PropTypes.string
}

export default YoutubeVideo
