# Aggrecat

## How to Develop

Create a [Twitter app](https://apps.twitter.com/).

```bash
bundle install
rails db:migrate
rake db:setup
cp dotenv.sample .env
```

Modify .env with your Twitter app's credentials.

```bash
bundle exec rails s
open http://localhost:3000
```
