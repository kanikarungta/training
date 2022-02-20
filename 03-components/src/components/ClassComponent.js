import React, { Component } from 'react';

class ClassComponent extends Component {
  render() {
    return (
      <div >
        <h1 className='text-underline'>{this.props.text}</h1>
      </div>
    )
  }
}

export default ClassComponent;

// only return 1 element from the one component - use Fragments or divs/spans/etc. 
