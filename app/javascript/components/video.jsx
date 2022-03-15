import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { VideoProject } from './VideoProject.jsx'

const getVideosUrl = "http://localhost:3000/api/v1/videos";

const getVideoIndex = () => {
  return
}

export const Video = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      axios.get(getVideosUrl)
      .then((response) => setVideos(videos.concat(response.data)))
      .catch((error) => console.log(error));
    };

    return () => (mounted = false);
  }, []);

  return (
    <div>
      <h1>dalton huey<br /><span className="h1-dash">&mdash;</span>videographer</h1>

      {videos.map((videoProject) => {
        return <VideoProject key={videoProject.id} title={videoProject.title} link={videoProject.youtube_link} description={videoProject.description} />
      })}

      <button>Add A Video Project</button>
    </div>
  )
}