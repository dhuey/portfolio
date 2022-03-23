class ApplicationController < ActionController::Base
  include CurrentUserConcern

  def fallback_index_html
    render "pages/index"
  end

  def authenticate_user
    unless @current_user
      render json: { message: "You must login to access this page" }, status: :unauthorized
    end
  end
end
