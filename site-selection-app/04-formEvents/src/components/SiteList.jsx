import React, { Component } from 'react';
import { sites } from './../constants/sites';
import SiteItem from './SiteItem';

class SiteList extends Component {
  constructor () {
    super();
    this.state = {
      sites: sites
    };
  };

  handleChange = id => {
    const modifiedSites = this.state.sites.map(site => {
      if (site.id === id) {
        site.isSelected = !site.isSelected;
      }
      return site;
    })
    this.setState({ sites: modifiedSites});
  }

  render () {
    return (
      <div  className='list'>
        <h4>Existing Sites List</h4>
        {
          this.state.sites.map( site => 
            <SiteItem 
              key={site.id}
              site={site}
              handleChange={this.handleChange}
            />
          )
        }
      </div>
    )
  }
};

export default SiteList;
