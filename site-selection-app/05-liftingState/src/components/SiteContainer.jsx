import React, { Component } from 'react';
import { sites } from '../constants/sites';
import SiteAdd from './SiteAdd';
import SiteList from './SiteList';

class SiteContainer extends Component {
  constructor () {
    super();
    this.state = {
      sites: sites
    }
  }

  addSite = siteName => {
    if (this.state.newSite === '') return;
    const newSite = {id: siteName, name: siteName, isSelected: false}
    this.setState({sites: [...this.state.sites, newSite]})
  }

  handleChange = id => {
    const changedSites = this.state.sites.map( site => {
      if (site.id === id) {
        site.isSelected = !site.isSelected
      }
      return site;
    })
    this.setState({sites: changedSites})
  };

  render () {
    return (
      <>
        <SiteAdd
          addSite={this.addSite}
        />
        <SiteList
          sites={this.state.sites}
          handleChange={this.handleChange}
        />
      </>
    )
  }
}

export default SiteContainer;
