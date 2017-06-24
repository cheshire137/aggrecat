import PropTypes from 'prop-types'

import LocalStorage from '../models/local-storage'

import AccountsForm from './accounts-form.jsx'
import Header from './header.jsx'

class AccountsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      twitterUser: LocalStorage.get('twitter-user'),
      redditUser: LocalStorage.get('reddit-user'),
      youtubeUser: LocalStorage.get('youtube-user')
    }
  }

  onAccountsUpdate(accounts) {
    LocalStorage.set('twitter-user', accounts.twitterUser)
    LocalStorage.set('reddit-user', accounts.redditUser)
    LocalStorage.set('youtube-user', accounts.youtubeUser)

    if (accounts.twitterUser || accounts.redditUser ||
        accounts.youtubeUser) {
      this.props.router.push('/')
    }
  }

  render() {
    const { redditUser, twitterUser, youtubeUser } = this.state
    return (
      <div>
        <Header title="Accounts" />
        <AccountsForm
          redditUser={redditUser}
          twitterUser={twitterUser}
          youtubeUser={youtubeUser}
          onUpdate={accounts => this.onAccountsUpdate(accounts)}
        />
      </div>
    )
  }
}

AccountsPage.propTypes = {
  router: PropTypes.object.isRequired
}

export default AccountsPage
