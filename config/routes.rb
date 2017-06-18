Rails.application.routes.draw do
  scope defaults: { format: :json }, path: "/api" do
    get '/tweets' => 'twitter#tweets', as: :tweets
    get '/reddit-activity' => 'reddit#activity', as: :reddit_activity
  end

  root to: 'home#index'

  # Catch-all route so React can handle routing
  get '*path' => 'home#index'
end
