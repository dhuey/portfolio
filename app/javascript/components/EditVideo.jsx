import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { VideoForm } from './VideoForm';

export const EditVideo = () => {
  const { id } = useParams(); // useParams() returns an object, so destructuring is needed here
  const [video, setVideo] = useState([]);

  const getVideo = async () => {
    try {
      let videoToEdit = await axios.get(`http://localhost:3000/api/v1/videos/${id}/edit`);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getVideo()
  }, [])

  return (
    <div>
      <h1>Edit Video Project</h1>
      <VideoForm />

      <p>{video}</p>
    </div>
  )
};
