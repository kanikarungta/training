import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIcecream } from '../redux';

function ItemContainer (props) {
  return (
    <div>
      <h2>Item Container - Number of { props.cake ? 'Cakes' : 'Icecreams' } - {props.numberOfItem}</h2>
      <button onClick={props.buyItem}>Buy { props.cake ? 'Cake' : 'Icecream' }</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    numberOfItem: ownProps.cake ? state.cake.noOfCakes : state.icecream.noOfIcecreams
  }
}

const mapDispatchToProps = (dispatch , ownProps)=> {
  return {
    buyItem: ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIcecream())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
