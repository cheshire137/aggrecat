json.channel do
  json.status @channel['status']
  json.name @channel['display_name']
  json.game @channel['game']
  json.logo @channel['logo']
  json.url @channel['url']
  json.description @channel['description']
end
json.videos @videos do |video|
  json.id video['_id']
  json.source 'twitch'
  json.title video['title']
  json.description video['description']
  json.views video['views']
  json.url video['url']
  json.time video['created_at']
  json.image video['preview']['medium']
end
