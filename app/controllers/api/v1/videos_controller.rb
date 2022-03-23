class Api::V1::VideosController < ApplicationController
  before_action :authenticate_user, except: [:index]
  def index
    @videos = Video.all.order(created_at: :desc)

    render json: @videos
  end

  def new
    @video = Video.new

    render json: @video, status: :ok
  end

  def create
    @video = Video.new(video_params)

    if @video.save
      render json: @video, status: :created
    else
      render json: @video.errors, status: :unprocessable_entity
    end
  end

  def edit
    @video = Video.find(params[:id])

    render json: @video, status: :ok
  end

  def update
    @video = Video.find(params[:id])

    if @video.update(video_params)
      render json: @video, status: :ok
    else
      render json: @video.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @video = Video.find(params[:id])

    if @video.destroy
      render json: {message: "Successfully deleted video!"}, status: :ok
    else
      render json: @video.errors, status: :unprocessable_entity
    end
  end

  private

  def video_params
    params.require(:video).permit(:title, :youtube_link, :description)
  end
end