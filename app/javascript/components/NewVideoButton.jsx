import React from 'react';
import { Link } from 'react-router-dom';

export const NewVideoButton = props => {
  return (
    <div className="add-resource">
      <Link to="new"><button className="button accent-button">Add A Video Project</button></Link>
    </div>
  )
}