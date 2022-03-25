class Api::V1::TechProjectsController < ApplicationController
  before_action :authenticate_user, except: [:index]
  def index
    @tech_projects = TechProject.all.order(created_at: :desc)

    render json: @tech_projects
  end

  def new
    @tech_project = tech_project.new

    render json: @tech_project, status: :ok
  end

  def create
    @tech_project = TechProject.new(tech_project_params)

    if @tech_project.save
      render json: @tech_project, status: :created
    else
      render json: @tech_project.errors, status: :unprocessable_entity
    end
  end

  def edit
    @tech_project = TechProject.find(params[:id])

    render json: @tech_project, status: :ok
  end

  def update
    @tech_project = TechProject.find(params[:id])

    if @tech_project.update(tech_project_params)
      render json: @tech_project, status: :ok
    else
      render json: @tech_project.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @tech_project = TechProject.find(params[:id])

    if @tech_project.destroy
      render json: {message: "Successfully deleted tech project!"}, status: :ok
    else
      render json: @tech_project.errors, status: :unprocessable_entity
    end
  end

  private

  def tech_project_params
    params.require(:tech_project).permit(:title, :youtube_link, :repo_link, :demo_link, :description)
  end
end