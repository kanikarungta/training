import React from 'react';

class SiteAdd extends React.Component{

  render () {
    return (
      <div className='list'>
         <h4>Add new Site</h4>
         <input className='site-input' />
         <button className='submit-button'>Add Site</button>
      </div>
    )
  };
};

export default SiteAdd;
