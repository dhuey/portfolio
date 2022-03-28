class Api::V1::MessagesController < ApplicationController
  def create
    MessagesMailer.contact_email(message_params).deliver_now
    render json: { message: "Successfully sent. Thanks for your message!" }, status: :created
  end

  private
  def message_params
    params.permit(:name, :email, :message)
  end
end