import React from 'react';

export const TechForm = props => {

  return (
    <div>
      <input name="title" type="text" id="title" placeholder="Title" onChange={props.titleChange} value={props.techProject.title} />
      <input type="url" name="youtube-link" id="youtube-link" placeholder="Youtube.link" onChange={props.ytLinkChange} value={props.techProject.youtube_link} />
      <input type="url" name="repo-link" id="repo-link" placeholder="Repo.link" onChange={props.repoLinkChange} value={props.techProject.repo_link} />
      <input type="url" name="demo-link" id="demo-link" placeholder="Demo.link" onChange={props.demoLinkChange} value={props.techProject.demo_link} />
      <textarea name="description" id="description" placeholder="Description" onChange={props.descChange} value={props.techProject.description} />
      <button type="submit" className="button accent-button form-submit" onClick={props.onSubmit}>{props.button}</button>
    </div>
  )
}