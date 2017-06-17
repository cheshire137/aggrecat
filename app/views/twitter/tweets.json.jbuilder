json.array! @tweets do |tweet|
  json.text tweet.text
  json.url tweet.uri.to_s
  json.user tweet.user.screen_name
  json.likes tweet.favorite_count
  json.retweets tweet.retweet_count
  json.time tweet.created_at
end
