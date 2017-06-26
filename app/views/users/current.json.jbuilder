json.user do
  json.auth user_signed_in?
  json.authenticityToken form_authenticity_token
  json.email @user ? @user.email : nil
end
