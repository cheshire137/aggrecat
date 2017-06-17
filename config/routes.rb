Rails.application.routes.draw do
  scope defaults: { format: :json }, path: "/api" do
    get '/tweets' => 'twitter#tweets', as: :tweets
  end
end
