import React from 'react';
import { Link } from 'react-router-dom';

export const VideoProject = (props) => {
  return (
    <div className="video-project-card">
      <iframe className="youtube-embed" width="560" height="315" src={props.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <div className="video-details">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <Link to={`edit/${props.id}`}><button className="button btn-small">Edit Video Project</button></Link>
      </div>
    </div>
  )
}