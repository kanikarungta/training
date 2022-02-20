import React, { Component } from 'react';
import { sites } from './../constants/sites';

class SiteList extends Component {
  constructor () {
    super();
    this.state = {
      sites: sites
    };
  };

  render () {
    return (
      <div  className='list'>
        <h4>Existing Sites List</h4>
        {
          sites.map( site => 
            <div key={site.id} className='single-site'>
              <span className={site.isSelected ? 'checked': ''} >{site.name}</span>
            </div>
          )
        }
      </div>
    )
  }
};

export default SiteList;
