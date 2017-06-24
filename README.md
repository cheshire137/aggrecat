# Aggrecat

## How to Develop

Create a [Twitter app](https://apps.twitter.com/).
Create a [Google API key](https://console.developers.google.com/apis/credentials).

```bash
bundle install
rails db:migrate
rake db:setup
cp dotenv.sample .env
```

Modify .env with your Twitter app's credentials and your Google API
key.

```bash
bundle exec rails s
open http://localhost:3000
```
