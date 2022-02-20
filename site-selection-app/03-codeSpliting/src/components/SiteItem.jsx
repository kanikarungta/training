import React from 'react';

export default function SiteItem (props) {
  return (
    <div className='single-site'>
      <span className={props.site.isSelected ? 'checked': ''} >{props.site.name}</span>
    </div>
  )
}
