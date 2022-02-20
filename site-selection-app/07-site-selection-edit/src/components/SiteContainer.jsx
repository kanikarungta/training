import React, { Component } from 'react';
import { sites } from '../constants/sites';
import SiteAdd from './SiteAdd';
import SiteList from './SiteList';

class SiteContainer extends Component {
  constructor () {
    super();
    this.state = {
      sites: sites,
      editSite: ''
    }
  }

  addSite = siteName => {
    if (siteName && !!this.state.editSite) {
      const changedSites = this.state.sites.map( site => {
        if (site.id === this.state.editSite) {
          site.name = siteName;
          site.id = siteName
        }
        return site;
      })
      this.setState({ sites: changedSites })
    } else if (siteName) {
      const newSite = { id: siteName, name: siteName, isSelected: false }
      this.setState({ sites: [...this.state.sites, newSite] })
    }
    this.setState({ editSite: '' })
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

  handleDelete = id => {
    if (this.state.editSite && this.state.editSite === id) this.setState({ editSite: '' })
    const changedSites = this.state.sites.filter(site => site.id !== id)
    this.setState({sites: changedSites})
  };

  handleEdit = id => {
    const editSite = this.state.sites.filter(site => site.id === id)
    this.setState({ editSite: editSite[0].id })
  }

  render () {
    return (
      <>
        <SiteAdd
          addSite={this.addSite}
          editSite={this.state.editSite}
        />
        <SiteList
          sites={this.state.sites}
          handleChange={this.handleChange}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </>
    )
  }
}

export default SiteContainer;
