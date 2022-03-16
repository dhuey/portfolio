import React, { useState } from 'react';

export const VideoForm = props => {
  const [video, setVideo] = useState(props.video);

  return (
    <div>
      <input name="title" id="title" placeholder="Title" onChange={props.titleChange} value={video.title} /><br />
      <input type="url" name="youtube-link" id="youtube-link" placeholder="Youtube.link" onChange={props.linkChange} value={video.youtubeLink} /><br />
      <textarea name="description" id="description" placeholder="Description" onChange={props.descChange} value={video.description} /><br />
      <button type="submit" onClick={props.onSubmit}>{props.button}</button>
    </div>
  )
}