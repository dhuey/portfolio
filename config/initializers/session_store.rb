if Rails.env == "production"
  Rails.application.config.session_store :cookie_store, key: "_dalton_huey_portfolio", domain: "https://dev-portfolio-x4mlo.ondigitalocean.app/"
else
  Rails.application.config.session_store :cookie_store, key: "_dalton_huey_portfolio"
end
