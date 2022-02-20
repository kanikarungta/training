import React from 'react';
import SiteItem from './SiteItem';

const SiteList = props => {
  return(
    <div className='list'>
      <h4>Existing Sites List</h4>
      {
        props.sites.map(site => 
          <SiteItem
            site={site}
            key={site.id}
            handleChange={props.handleChange}
          />
        )
      }
    </div>
  )
};

export default SiteList;
