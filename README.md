# Aggrecat

Build your own activity feed from different social media sites.

## How to Develop

Create a [Twitter app](https://apps.twitter.com/).
Create a [Google API key](https://console.developers.google.com/apis/credentials).
Create a [Twitch app](https://www.twitch.tv/kraken/oauth2/clients).

```bash
bundle install
rails db:migrate
rake db:setup
cp dotenv.sample .env
```

Modify .env with your Twitter app's credentials, your Google API
key, and your Twitch client ID.

```bash
bundle exec rails s
open http://localhost:3000
```
