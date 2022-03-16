import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { VideoForm } from './VideoForm';

export const EditVideo = () => {
  const { id } = useParams(); // useParams() returns an object, so destructuring is needed here
  const [video, setVideo] = useState({title: "", youtube_link: "", description: ""});
  const navigate = useNavigate();

  const getVideo = async () => {
    try {
      let request = await axios.get(`http://localhost:3000/api/v1/videos/${id}/edit`);
      let videoToEdit = request.data;
      setVideo({title: videoToEdit.title, youtube_link: videoToEdit.youtube_link, description: videoToEdit.description})
    } catch (error) {
      console.log(error);
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
    getVideo();
  }, [])

  const editVideo = async () => {
    try {
      const response = await axios.patch(`http://localhost:3000/api/v1/videos/${id}`, video);
      navigate('/video');
    } catch (error) {
      console.log(error);
    }
  }

  const deleteVideo = async () => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/v1/videos/${id}`);
      navigate('/video');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Link to="/video">{"<- Back to videos"}</Link>
      <h1>Edit Video Project</h1>
      <VideoForm onSubmit={editVideo} video={video} button="Save Video Project" titleChange={handleTitleChange} linkChange={handleLinkChange} descChange={handleDescChange} />

      <button onClick={deleteVideo}>Delete Video</button>
    </div>
  )
};
