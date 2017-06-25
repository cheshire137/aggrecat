class GithubApi
  include HTTParty
  base_uri 'https://api.github.com'

  def events(user)
    response = self.class.get("/users/#{user}/events")
    response.parsed_response
  end
end
