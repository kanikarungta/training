import React from 'react';

export default function SiteItem (props) {
  return (
    <div className='single-site'>
      <input
        type='checkbox'
        name={props.site.id}
        checked={props.site.isSelected === true}
        onChange={() => props.handleChange(props.site.id)}
      />
      <span
        className={props.site.isSelected ? 'checked': ''}
      >
        {props.site.name}
      </span>
    </div>
  )
}
