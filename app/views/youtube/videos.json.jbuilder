json.array! @videos do |video|
  json.source 'youtube'
  json.id video['id']['videoId']
  json.time video['snippet']['publishedAt']
  json.title video['snippet']['title']
  json.description video['snippet']['description']
  json.image video['snippet']['thumbnails']['default']['url']
  json.imageWidth video['snippet']['thumbnails']['default']['width']
  json.imageHeight video['snippet']['thumbnails']['default']['height']
  json.url "https://www.youtube.com/watch?v=#{video['id']['videoId']}"
  json.embedUrl "https://www.youtube.com/embed/#{video['id']['videoId']}"
end
