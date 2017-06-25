json.array! @events do |event|
  json.source 'github'
  json.id event['id']
  json.time event['created_at']
  json.type event['type']

  if event['type'] == 'PushEvent'
    json.repo event['repo']['name']
    json.url "https://github.com/#{event['repo']['name']}"
    json.commitCount event['payload']['size']
    json.commitMessages event['payload']['commits'].map do |commit|
      commit['message']
    end

  elsif event['type'] == 'CreateEvent'
    json.repo event['repo']['name']
    if event['payload']['ref_type'] == 'branch'
      json.branch event['payload']['ref']
      json.url "https://github.com/#{event['repo']['name']}/tree/#{event['payload']['ref']}"
    end

  elsif event['type'] == 'PullRequestEvent'
    json.repo event['repo']['name']
    json.url event['payload']['pull_request']['html_url']
    json.title event['payload']['pull_request']['title']
    json.body event['payload']['pull_request']['body']

  elsif event['type'] == 'ForkEvent'
    json.repo event['repo']['name']
    json.url event['payload']['forkee']['html_url']
    json.sourceUrl "https://github.com/#{event['repo']['name']}"

  elsif event['type'] == 'WatchEvent'
    json.repo event['repo']['name']
    json.action event['payload']['action']
    json.url "https://github.com/#{event['repo']['name']}"

  elsif event['type'] == 'IssueCommentEvent'
    json.repo event['repo']['name']
    json.url event['payload']['issue']['html_url']
    json.title event['payload']['issue']['title']

  elsif event['type'] == 'IssuesEvent'
    json.repo event['repo']['name']
    json.action event['payload']['action']
    json.url event['payload']['issue']['html_url']
    json.title event['payload']['issue']['title']
  end
end
