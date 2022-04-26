import React from "react";

export const VideoForm = (props) => {
  return (
    <div>
      <input
        name="title"
        type="text"
        id="title"
        placeholder="Title"
        onChange={props.titleChange}
        value={props.video.title}
      />
      <input
        type="url"
        name="youtube-link"
        id="youtube-link"
        placeholder="Youtube.link"
        onChange={props.linkChange}
        value={props.video.youtube_link}
      />
      <textarea
        name="description"
        id="description"
        placeholder="Description"
        onChange={props.descChange}
        value={props.video.description}
      />
      <button
        type="submit"
        className="button accent-button form-submit"
        onClick={props.onSubmit}
      >
        {props.button}
      </button>
    </div>
  );
};
