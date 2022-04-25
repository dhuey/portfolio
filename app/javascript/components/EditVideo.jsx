import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ax from '../modules/csrfToken';
import { VideoForm } from './VideoForm';
import { BackButton } from './BackButton';
import HOST_URL from '../modules/hostUrl';

export const EditVideo = () => {
  const { id } = useParams(); // useParams() returns an object, so destructuring is needed here
  const [video, setVideo] = useState({title: "", youtube_link: "", description: ""});
  const navigate = useNavigate();

  const getVideo = async () => {
    try {
      let request = await ax.get(`${HOST_URL}api/v1/videos/${id}/edit`);
      let videoToEdit = request.data;
      setVideo({title: videoToEdit.title, youtube_link: videoToEdit.youtube_link, description: videoToEdit.description})
    } catch (error) {
      if (error.response.status === 401) {
        navigate('/video');
      } else {
        console.log(error);
      }
    }
  }

  const handleTitleChange = e => {
    setVideo({title: e.target.value, youtube_link: video.youtube_link, description: video.description});
  }

  const handleLinkChange = e => {
    setVideo({title: video.title, youtube_link: e.target.value, description: video.description})
  }

  const handleDescChange = e => {
    setVideo({title: video.title, youtube_link: video.youtube_link, description: e.target.value})
  }

  useEffect(() => {
    document.title = "Edit Video Project — Dalton Huey";
    getVideo();
  }, [])

  const editVideo = async () => {
    try {
      const response = await ax.patch(`${HOST_URL}api/v1/videos/${id}`, video);
      navigate('/video');
    } catch (error) {
      console.log(error);
    }
  }

  const deleteVideo = async () => {
    try {
      const response = await ax.delete(`${HOST_URL}api/v1/videos/${id}`);
      navigate('/video');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="form-container">
      <BackButton route="/video" backTo="videos" />
      <div className="text-center">
        <h1>Edit Video Project</h1>
        <VideoForm onSubmit={editVideo} video={video} button="Save Video Project" titleChange={handleTitleChange} linkChange={handleLinkChange} descChange={handleDescChange} />

        <button className="button delete-button form-submit" onClick={deleteVideo}>Delete Video</button>
      </div>
    </div>
  )
};
