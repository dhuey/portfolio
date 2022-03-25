class CreateTechProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :tech_projects do |t|
      t.string :title
      t.string :youtube_link
      t.string :repo_link
      t.string :demo_link
      t.text :description

      t.timestamps
    end
  end
end
