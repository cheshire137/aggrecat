class YoutubeApi
  include HTTParty
  base_uri 'https://www.googleapis.com/youtube/v3'
  headers 'Referer' => 'localhost:3000'

  def channels(user)
    response = self.class.get('/channels', query: {
      part: 'snippet,contentDetails',
      key: ENV['GOOGLE_API_KEY'],
      forUsername: user
    })
    items_if_success(response)
  end

  def playlist_items(playlist_id)
    response = self.class.get('/playlistItems', query: {
      part: 'snippet,contentDetails',
      key: ENV['GOOGLE_API_KEY'],
      playlistId: playlist_id
    })
    items_if_success(response)
  end

  def channel_videos(channel_id)
    response = self.class.get('/search', query: {
      part: 'snippet',
      key: ENV['GOOGLE_API_KEY'],
      order: 'date',
      channelId: channel_id
    })
    items_if_success(response)
  end

  private

  def items_if_success(response)
    json = response.parsed_response
    return json['items'] if response.code == 200
    raise json['error']['message']
  end
end
