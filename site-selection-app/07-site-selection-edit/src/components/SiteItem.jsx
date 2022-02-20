import React from 'react';
import { FaTrash, FaEdit } from "react-icons/fa"

export default function SiteItem (props) {
  return (
    <div className='single-site'>
      <input
        type='checkbox'
        name={props.site.id}
        checked={props.site.isSelected === true}
        onChange={() => {props.handleChange(props.site.id)}}
      />
      <span className={props.site.isSelected ? 'checked': ''}>{props.site.name}</span>
      <FaTrash className='icon' onClick={() => props.handleDelete(props.site.id)} />
      <FaEdit className='icon' onClick={() => props.handleEdit(props.site.id)} />
    </div>
  )
};
