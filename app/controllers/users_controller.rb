class UsersController < ApplicationController
  def current
    @user = current_user
  end
end
