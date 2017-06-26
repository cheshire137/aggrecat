user = User.create(email: ENV['ADMIN_EMAIL'],
                   password: ENV['ADMIN_PASSWORD'],
                   password_confirmation: ENV['ADMIN_PASSWORD'])
puts "Created user #{user.email}"
