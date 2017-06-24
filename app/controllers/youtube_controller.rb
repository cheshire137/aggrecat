class YoutubeController < ApplicationController
  def videos
    api = YoutubeApi.new
    channels = api.channels(params[:user], max_results: 1)

    @videos = if channels.length < 1
      []
    else
      api.channel_videos(channels.first['id'])
    end
  end
end
