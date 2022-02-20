import React from 'react';
import { sites } from '../constants/sites';

class SiteAdd extends React.Component{
  constructor () {
    super();
    this.state = {
      newSite: '',
      sites: sites
    }
  }

  onChange = e => {
    this.setState({newSite: e.target.value});
  };

  addSite = siteName => {
    if (this.state.newSite === '') return;
    const newSite = {id: siteName, name: siteName, isSelected: false}
    this.setState({ sites: [...this.state.sites, newSite] })
  }

  render () {
    console.log('sites:', this.state.sites);
    return (
      <div className='list'>
         <h4>Add new Site</h4>
         <input
          name='newSite'
          value={this.state.newSite}
          onChange={e => this.onChange(e)}
          className='site-input'
        />
         <button
          className='submit-button'
          onClick={() => this.addSite(this.state.newSite)}
        >
          Add Site
        </button>
      </div>
    )
  };
};

export default SiteAdd;
