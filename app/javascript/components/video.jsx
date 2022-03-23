import React, { useState, useEffect } from 'react';
import ax from '../modules/csrfToken';
import { VideoProject } from './VideoProject.jsx';
import { Link } from 'react-router-dom';
import { AuthComponent } from './AuthComponent';
import { NewVideoButton } from './NewVideoButton';

export const Video = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      ax.get("http://localhost:3000/api/v1/videos")
      .then((response) => setVideos(videos.concat(response.data)))
      .catch((error) => console.log(error));
    };

    return () => (mounted = false);
  }, []);

  return (
    <div>
      <div className="hero-section">
        <div>
          <h1>dalton huey<br /><span className="h1-dash">&mdash;</span>videographer</h1>
          <p>Big and small, I’m passionate about telling stories that matter. Perfectly content to be a writer, a director, a DP, or all of them at once.</p>
        </div>
        <img src="/dalton-profile-large.jpg" />
      </div>

      {videos.map((videoProject) => {
        return <VideoProject key={videoProject.id} id={videoProject.id} title={videoProject.title} link={videoProject.youtube_link} description={videoProject.description} />
      })}

      <AuthComponent component={<NewVideoButton />} />
    </div>
  )
}