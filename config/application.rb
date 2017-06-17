require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Aggrecat
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Run on all javascript files
    config.browserify_rails.force = true

    # https://github.com/browserify-rails/browserify-rails#using-browserify-transforms
    config.browserify_rails.commandline_options = "-t [ babelify --presets [ es2015 react ] ]"

    config.generators do |g|
      g.view_specs false
      g.helper_specs false
      g.stylesheets false
      g.javascripts false
    end
  end
end
