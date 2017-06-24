json.array! @tweets do |tweet|
  json.id tweet.id.to_s
  json.time tweet.created_at
  json.source 'twitter'
end
