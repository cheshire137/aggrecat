import PropTypes from 'prop-types'

import GithubCreateEvent from './github-create-event.jsx'
import GithubForkEvent from './github-fork-event.jsx'
import GithubIssueCommentEvent from './github-issue-comment-event.jsx'
import GithubIssuesEvent from './github-issues-event.jsx'
import GithubPullRequestEvent from './github-pull-request-event.jsx'
import GithubPushEvent from './github-push-event.jsx'
import GithubWatchEvent from './github-watch-event.jsx'

const GithubEvent = function(props) {
  const { item } = props

  if (item.type === 'WatchEvent') {
    return <GithubWatchEvent {...item} />
  }

  if (item.type === 'PushEvent') {
    return <GithubPushEvent {...item} />
  }

  if (item.type === 'CreateEvent') {
    return <GithubCreateEvent {...item} />
  }

  if (item.type === 'PullRequestEvent') {
    return <GithubPullRequestEvent {...item} />
  }

  if (item.type === 'IssueCommentEvent') {
    return <GithubIssueCommentEvent {...item} />
  }

  if (item.type === 'IssuesEvent') {
    return <GithubIssuesEvent {...item} />
  }

  if (item.type === 'ForkEvent') {
    return <GithubForkEvent {...item} />
  }

  return <p>{item.type}</p>
}

GithubEvent.propTypes = {
  item: PropTypes.object.isRequired
}

export default GithubEvent
