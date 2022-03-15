import React, { useState } from 'react';

export const VideoForm = () => {
  const [video, setVideo] = useState({title: "", youtubeLink: "", description: ""});

  const handleTitleChange = e => {
    setVideo({title: e.target.value, youtubeLink: video.youtubeLink, description: video.description});
    console.log(video)
  }

  const handleLinkChange = e => {
    setVideo({title: video.title, youtubeLink: e.target.value, description: video.description})
    console.log(video)
  }

  const handleDescChange = e => {
    setVideo({title: video.title, youtubeLink: video.youtubeLink, description: e.target.value})
    console.log(video)
  }
  return (
    <div>
      <h1>New Video Project</h1>
      <input name="title" id="title" placeholder="Title" onChange={handleTitleChange} value={video.title} /><br />
      <input type="url" name="youtube-link" id="youtube-link" placeholder="Youtube.link" onChange={handleLinkChange} value={video.youtubeLink} /><br />
      <textarea name="description" id="description" placeholder="Description" onChange={handleDescChange} value={video.description} /><br />
      <button type="submit">Submit</button>
    </div>
  )
}