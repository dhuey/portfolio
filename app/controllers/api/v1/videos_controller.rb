class Api::V1::VideosController < ApplicationController
  def index
    @videos = Video.all

    render json: @videos
  end

  def create
    @video = Video.new(video_params)

    if @video.save
      render json: @video, status: :created
    else
      render json: @video.errors, status: :unprocessable_entity
    end
  end

  private

  def video_params
    params.require(:video).permit(:title, :youtube_link, :description)
  end
end