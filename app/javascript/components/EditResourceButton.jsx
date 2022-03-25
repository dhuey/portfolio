import React from 'react';
import { Link } from 'react-router-dom';

export const EditResourceButton = props => {
  return <Link to={`edit/${props.id}`}><button className="button btn-small">Edit {props.resourceName}</button></Link>
}