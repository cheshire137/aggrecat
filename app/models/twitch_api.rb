class TwitchApi
  include HTTParty
  base_uri 'https://api.twitch.tv/kraken'
  headers 'Accept' => 'application/vnd.twitchtv.v5+json',
          'Client-ID' => ENV['TWITCH_CLIENT_ID']

  def user(user_name)
    response = self.class.get('/users', query: {
      login: user_name
    })
    json = response.parsed_response
    return json['users'].first if json['_total'] > 0
  end

  def channel(channel_id)
    response = self.class.get("/channels/#{channel_id}")
    response.parsed_response
  end

  def channel_videos(channel_id)
    response = self.class.get("/channels/#{channel_id}/videos")
    json = response.parsed_response
    json['videos']
  end
end
