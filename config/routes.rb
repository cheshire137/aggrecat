Rails.application.routes.draw do
  scope defaults: { format: :json }, path: "/api" do
    get '/tweets' => 'twitter#tweets', as: :tweets
    get '/youtube-videos' => 'youtube#videos', as: :youtube_videos
    get '/reddit-activity' => 'reddit#activity', as: :reddit_activity
    get '/twitch-streamer' => 'twitch#streamer', as: :twitch_streamer
  end

  root to: 'home#index'

  # Catch-all route so React can handle routing
  get '*path' => 'home#index'
end
