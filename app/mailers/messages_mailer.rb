class MessagesMailer < ActionMailer::Base
  def contact_email(params)
    @name = params[:name]
    @email = params[:email]
    @message = params[:message]
    mail(to: "daltonjhuey@gmail.com", from: @email, subject: "New message from #{@name} via daltonhuey.com")
  end
end