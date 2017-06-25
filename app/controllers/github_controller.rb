class GithubController < ApplicationController
  def events
    @events = GithubApi.new.events(params[:user])
  end
end
