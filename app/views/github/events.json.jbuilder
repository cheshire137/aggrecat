json.array! @events do |event|
  json.source 'github'
  json.id event['id']
  json.time event['created_at']
  json.type event['type']

  if event['actor']
    json.login event['actor']['login']
    json.userUrl "https://github.com/#{event['actor']['login']}"
  end

  if event['repo']
    json.repo event['repo']['name']
    json.repoUrl "https://github.com/#{event['repo']['name']}"
  end

  if event['type'] == 'PushEvent'
    json.commitCount event['payload']['size']
    json.commits event['payload']['commits'] do |commit|
      json.message commit['message']
      json.sha commit['sha']
      json.url "https://github.com/#{event['repo']['name']}/commit/#{commit['sha']}"
      json.shortSha commit['sha'][0...7]
    end

  elsif event['type'] == 'CreateEvent'
    if event['payload']['ref_type'] == 'branch'
      json.branch event['payload']['ref']
      json.branchUrl "https://github.com/#{event['repo']['name']}/tree/#{event['payload']['ref']}"
    end

  elsif event['type'] == 'PullRequestEvent'
    json.pullRequestUrl event['payload']['pull_request']['html_url']
    json.title event['payload']['pull_request']['title']
    json.body event['payload']['pull_request']['body']
    json.action event['payload']['action']

  elsif event['type'] == 'ForkEvent'
    json.url event['payload']['forkee']['html_url']
    json.fork event['payload']['forkee']['full_name']

  elsif event['type'] == 'WatchEvent'
    json.action event['payload']['action']

  elsif event['type'] == 'IssueCommentEvent'
    json.url event['payload']['issue']['html_url']
    json.title event['payload']['issue']['title']
    json.body event['payload']['comment']['body']

  elsif event['type'] == 'IssuesEvent'
    json.action event['payload']['action']
    json.url event['payload']['issue']['html_url']
    json.title event['payload']['issue']['title']
  end
end
