class RedditController < ApplicationController
  def activity
    category = params[:category].presence || 'overview'
    @activity = RedditKit.user_content(params[:user], category: category)
  end
end
