class ApplicationController < ActionController::Base
  def fallback_index_html
    render "pages/index"
  end
end
