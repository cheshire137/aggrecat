import LocalStorage from '../models/local-storage'

import AccountsForm from './accounts-form.jsx'
import Header from './header.jsx'

class AccountsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      twitterUser: LocalStorage.get('twitter-user'),
      redditUser: LocalStorage.get('reddit-user')
    }
  }

  onAccountsUpdate(accounts) {
    LocalStorage.set('twitter-user', accounts.twitterUser)
    LocalStorage.set('reddit-user', accounts.redditUser)
  }

  render() {
    const { redditUser, twitterUser } = this.state
    return (
      <div>
        <Header title="Accounts" />
        <AccountsForm
          redditUser={redditUser}
          twitterUser={twitterUser}
          onUpdate={accounts => this.onAccountsUpdate(accounts)}
        />
      </div>
    )
  }
}

export default AccountsPage