class Api::V1::MessagesController < ApplicationController
  def create
    MessagesMailer.contact_email(message_params)
  end

  private
  def message_params
    params.permit(:name, :email, :message)
  end
end