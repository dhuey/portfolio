import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ax from '../modules/csrfToken';
import { VideoForm } from './VideoForm';
import { BackButton } from './BackButton';

export const NewVideo = () => {
  const [video, setVideo] = useState({title: "", youtube_link: "", description: ""});
  const navigate = useNavigate();

  const handleTitleChange = e => {
    setVideo({title: e.target.value, youtube_link: video.youtube_link, description: video.description});
  }

  const handleLinkChange = e => {
    setVideo({title: video.title, youtube_link: e.target.value, description: video.description})
  }

  const handleDescChange = e => {
    setVideo({title: video.title, youtube_link: video.youtube_link, description: e.target.value})
  }


  const submitVideo = async () => {
    try {
      const response = await ax.post('http://localhost:3000/api/v1/videos', video);
      navigate('/video');
    } catch (error) {
      console.log(error)
    };
  }

  return (
    <div className="form-container">
      <BackButton route="/video" backTo="videos" />
      <div className="text-center">
        <h1>New Video Project</h1>
        <VideoForm onSubmit={submitVideo} video={video} button="Create Video Project" titleChange={handleTitleChange} linkChange={handleLinkChange} descChange={handleDescChange} />
      </div>
    </div>
  )
}