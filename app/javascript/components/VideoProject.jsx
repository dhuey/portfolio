import React from 'react';

export const VideoProject = (props) => {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Url: {props.link}</p>
      <p>Description: {props.description}</p>
    </div>
  )
}