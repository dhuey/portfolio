import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { AuthComponent } from './AuthComponent';
import { EditVideoButton } from './EditVideoButton';

export const VideoProject = (props) => {
  const [loggedInStatus, user] = useOutletContext();

  return (
    <div className="video-project-card">
      <iframe className="youtube-embed" width="560" height="315" src={props.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <div className="video-details">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <AuthComponent component={<EditVideoButton id={props.id} />} />
      </div>
    </div>
  )
}