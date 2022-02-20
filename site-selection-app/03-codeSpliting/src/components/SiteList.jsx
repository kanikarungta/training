import React, { Component } from 'react';
import { sites } from './../constants/sites';
import SiteItem from './SiteItem';

class SiteList extends Component {
  render () {
    return (
      <div  className='list'>
        <h4>Existing Sites List</h4>
        {
          sites.map( site => {
            return <SiteItem key={site.id} site={site}/>
          })
        }
      </div>
    )
  }
};

export default SiteList;
