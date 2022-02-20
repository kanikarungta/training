import React from 'react';

class SiteAdd extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      newSite: ''
    }
  };

  onChange = (e) => {
    this.setState({newSite: e.target.value})
  };

  addSite = () => {
    this.props.addSite(this.state.newSite);
    this.setState({newSite: ''})
  };

  componentDidUpdate (prevProps) {
    if ( prevProps.editSite !== this.props.editSite) {
      this.setState({ newSite: this.props.editSite });
    }
  };

  render() {
    return (
      <div className='list'>
        <h4>{ this.props.editSite ? 'Edit Site' : 'Add new Site' }</h4>
        <input
          name='newSite'
          value={this.state.newSite}
          onChange={e => this.onChange(e)}
          className='site-input'
        />
        <button
          type='submit'
          className='submit-button'
          onClick={this.addSite}
        >
          { this.props.editSite ? 'Edit Site' : 'Add Site' }
        </button>
      </div>
    )
  }

}

export default SiteAdd;
