import React from 'react';
import { Link } from 'react-router-dom';

export const EditVideoButton = props => {
  return <Link to={`edit/${props.id}`}><button className="button btn-small">Edit Video Project</button></Link>
}