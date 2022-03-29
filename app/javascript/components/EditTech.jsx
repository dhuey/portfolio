import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ax from "../modules/csrfToken";
import { TechForm } from "./TechForm";
import { BackButton } from "./BackButton";

export const EditTech = () => {
  const { id } = useParams(); // useParams() returns an object, so destructuring is needed here
  const [techProject, setTechProject] = useState({
    title: "",
    youtube_link: "",
    repo_link: "",
    demo_link: "",
    description: "",
  });
  const navigate = useNavigate();

  const getTechProject = async () => {
    try {
      let request = await ax.get(
        `http://localhost:3000/api/v1/tech_projects/${id}/edit`
      );
      let techToEdit = request.data;
      setTechProject({
        title: techToEdit.title,
        youtube_link: techToEdit.youtube_link,
        repo_link: techToEdit.repo_link,
        demo_link: techToEdit.demo_link,
        description: techToEdit.description,
      });
    } catch (error) {
      if (error.response.status === 401) {
        navigate("/tech");
      } else {
        console.log(error);
      }
    }
  };

  const handleTitleChange = (e) => {
    setTechProject({
      title: e.target.value,
      youtube_link: techProject.youtube_link,
      repo_link: techProject.repo_link,
      demo_link: techProject.demo_link,
      description: techProject.description
    });
  };

  const handleYtLinkChange = (e) => {
    setTechProject({
      title: techProject.title,
      youtube_link: e.target.value,
      repo_link: techProject.repo_link,
      demo_link: techProject.demo_link,
      description: techProject.description
    });
  };

  const handleRepoLinkChange = (e) => {
    setTechProject({
      title: techProject.title,
      youtube_link: techProject.youtube_link,
      repo_link: e.target.value,
      demo_link: techProject.demo_link,
      description: techProject.description
    });
  };

  const handleDemoLinkChange = (e) => {
    setTechProject({
      title: techProject.title,
      youtube_link: techProject.youtube_link,
      repo_link: techProject.repo_link,
      demo_link: e.target.value,
      description: techProject.description
    });
  };

  const handleDescChange = (e) => {
    setTechProject({
      title: techProject.title,
      youtube_link: techProject.youtube_link,
      repo_link: techProject.repo_link,
      demo_link: techProject.demo_link,
      description: e.target.value,
    });
  };

  useEffect(() => {
    document.title = "Edit Tech Project — Dalton Huey";
    getTechProject();
  }, []);

  const editTechProject = async () => {
    try {
      const response = await ax.patch(
        `http://localhost:3000/api/v1/tech_projects/${id}`,
        techProject
      );
      navigate("/tech");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTechProject = async () => {
    try {
      const response = await ax.delete(
        `http://localhost:3000/api/v1/tech_projects/${id}`
      );
      navigate("/tech");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <BackButton route="/tech" backTo="tech" />
      <div className="text-center">
        <h1>Edit Tech Project</h1>
        <TechForm
          onSubmit={editTechProject}
          techProject={techProject}
          button="Edit Tech Project"
          titleChange={handleTitleChange}
          ytLinkChange={handleYtLinkChange}
          repoLinkChange={handleRepoLinkChange}
          demoLinkChange={handleDemoLinkChange}
          descChange={handleDescChange}
        />

        <button
          className="button delete-button form-submit"
          onClick={deleteTechProject}
        >
          Delete Tech Project
        </button>
      </div>
    </div>
  );
};
