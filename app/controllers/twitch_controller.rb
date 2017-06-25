class TwitchController < ApplicationController
  def streamer
    api = TwitchApi.new
    @user = api.user(params[:user])

    if @user
      @channel = api.channel(@user['_id'])
      @videos = api.channel_videos(@user['_id'])
    else
      render json: { error: 'Streamer not found' }, status: :not_found
    end
  end
end
