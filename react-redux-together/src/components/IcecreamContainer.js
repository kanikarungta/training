import React from 'react';
import { connect } from 'react-redux';
import { buyIcecream } from '../redux';

function IcecreamContainer (props) {
  return (
    <div>
      <h2>Number of Icecreams - {props.numberOfIcecreams}</h2>
      <button onClick={props.buyIcecream}>Buy Icecreams</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numberOfIcecreams: state.icecream.noOfIcecreams
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyIcecream: () => dispatch(buyIcecream())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);
