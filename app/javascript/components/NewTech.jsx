import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ax from "../modules/csrfToken";
import { TechForm } from "./TechForm";
import { BackButton } from "./BackButton";

export const NewTech = () => {
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
        `http://localhost:3000/api/v1/tech_projects/new`
      );
      let newTechProject = request.data;
      setTechProject({
        title: newTechProject.title,
        youtube_link: newTechProject.youtube_link,
        repo_link: newTechProject.repo_link,
        demo_link: newTechProject.demo_link,
        description: newTechProject.description
      });
    } catch (error) {
      if (error.response.status === 401) {
        navigate("/tech");
      } else {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getTechProject();
  }, []);

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

  const submitTechProject = async () => {
    try {
      const response = await ax.post(
        "http://localhost:3000/api/v1/tech_projects",
        techProject
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
        <h1>New Tech Project</h1>
        <TechForm
          onSubmit={submitTechProject}
          techProject={techProject}
          button="Create Tech Project"
          titleChange={handleTitleChange}
          ytLinkChange={handleYtLinkChange}
          repoLinkChange={handleRepoLinkChange}
          demoLinkChange={handleDemoLinkChange}
          descChange={handleDescChange}
        />
      </div>
    </div>
  );
};
