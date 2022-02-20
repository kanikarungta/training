import { Component } from "react";


class ItemsList extends Component {

  render () {
    return (
      <div className='list'>
        <h4>{this.props.header}</h4>
  
        {
          this.props.items.map((item) => { 
            return (
              <div
                className={`single-site ${item.isSelected === true ? 'checked' : ''}`}
              >
                {item.name}
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default ItemsList;
