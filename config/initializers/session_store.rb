if Rails.env == "production"
  Rails.application.config.session_store :cookie_store, key: "_dalton_huey_portfolio", domain: "dalton-huey.herokuapp.com"
else
  Rails.application.config.session_store :cookie_store, key: "_dalton_huey_portfolio"
end
