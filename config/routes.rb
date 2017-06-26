Rails.application.routes.draw do
  devise_for :users, skip: [:registrations]

  scope defaults: { format: :json }, path: "/api" do
    get '/github-events' => 'github#events', as: :github_events
    get '/tweets' => 'twitter#tweets', as: :tweets
    get '/youtube-videos' => 'youtube#videos', as: :youtube_videos
    get '/reddit-activity' => 'reddit#activity', as: :reddit_activity
    get '/twitch-streamer' => 'twitch#streamer', as: :twitch_streamer
    get '/user' => 'users#current', as: :current_user
  end

  root to: 'home#index'

  # Catch-all route so React can handle routing
  get '*path' => 'home#index'
end
