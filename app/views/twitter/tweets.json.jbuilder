json.array! @tweets do |tweet|
  json.id tweet.id.to_s
  json.source 'twitter'
end
