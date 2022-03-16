import React from 'react';

export const VideoForm = props => {

  return (
    <div>
      <input name="title" id="title" placeholder="Title" onChange={props.titleChange} value={props.video.title} /><br />
      <input type="url" name="youtube-link" id="youtube-link" placeholder="Youtube.link" onChange={props.linkChange} value={props.video.youtube_link} /><br />
      <textarea name="description" id="description" placeholder="Description" onChange={props.descChange} value={props.video.description} /><br />
      <button type="submit" onClick={props.onSubmit}>{props.button}</button>
    </div>
  )
}