class YoutubeApi
  include HTTParty
  base_uri 'https://www.googleapis.com/youtube/v3'
  headers 'Referer' => 'localhost:3000'

  def channels(user, max_results: 25)
    response = self.class.get('/channels', query: {
      part: 'snippet,contentDetails',
      key: ENV['GOOGLE_API_KEY'],
      forUsername: user,
      maxResults: max_results
    })
    items_if_success(response)
  end

  def channel_videos(channel_id, max_results: 25, after: nil)
    params = {
      part: 'snippet',
      key: ENV['GOOGLE_API_KEY'],
      order: 'date',
      channelId: channel_id,
      maxResults: max_results
    }
    params[:publishedAfter] = after.rfc3339 if after
    response = self.class.get('/search', query: params)
    items_if_success(response)
  end

  private

  def items_if_success(response)
    json = response.parsed_response
    return json['items'] if response.code == 200
    raise json['error']['message']
  end
end
