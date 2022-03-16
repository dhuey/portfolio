import React, { useState } from 'react';
import axios from 'axios';

export const VideoForm = () => {
  const [video, setVideo] = useState({title: "", youtube_link: "", description: ""});
  const [dbError, setDbError] = useState([]);

  const handleTitleChange = e => {
    setVideo({title: e.target.value, youtube_link: video.youtube_link, description: video.description});
    console.log(video)
  }

  const handleLinkChange = e => {
    setVideo({title: video.title, youtube_link: e.target.value, description: video.description})
    console.log(video)
  }

  const handleDescChange = e => {
    setVideo({title: video.title, youtube_link: video.youtube_link, description: e.target.value})
    console.log(video)
  }

  const submitVideo = async () => {
    setDbError([]);
    try {
      const response = await axios.post('http://localhost:3000/api/v1/videos', video);
      console.log(response.data);
    } catch (error) {
      console.log(error)
    };

  }
  return (
    <div>
      <h1>New Video Project</h1>
      <input name="title" id="title" placeholder="Title" onChange={handleTitleChange} value={video.title} /><br />
      <input type="url" name="youtube-link" id="youtube-link" placeholder="Youtube.link" onChange={handleLinkChange} value={video.youtubeLink} /><br />
      <textarea name="description" id="description" placeholder="Description" onChange={handleDescChange} value={video.description} /><br />
      <button type="submit" onClick={submitVideo}>Submit</button>
    </div>
  )
}