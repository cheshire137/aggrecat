json.array! @activity do |item|
  json.source 'reddit'

  if item.is_a? RedditKit::Comment
    json.type 'comment'
    json.user item.author
    json.body item.body
    json.subreddit item.subreddit
    json.score item.score
    json.time item.posted_at
    json.url "#{item.attributes[:link_permalink]}#{item.attributes[:id]}?context=3"
    json.id "comment-#{item.posted_at.to_i}"

  elsif item.is_a? RedditKit::Link
    json.type 'link'
    json.title item.title
    json.user item.author
    json.domain item.domain
    json.score item.score
    json.isSelfPost item.self_post?
    json.selfText item.selftext
    json.commentCount item.num_comments
    json.url item.url
    json.commentsURL item.permalink
    json.nsfw item.over_18
    json.subreddit item.subreddit
    json.time item.created_at
    json.id "link-#{item.short_link}"

  else
    json.type item.class.name
  end
end
