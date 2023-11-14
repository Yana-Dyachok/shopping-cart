import React, { Component } from 'react'
export class item extends Component {
  render() {
    return (
      <div className='card-block'>
        <div className='card-img-container'>
        <img className='card-img' src={"./img/"+this.props.item.img}/>
        </div>
        <div className='card-block-text'>
        <h2 className='card-name'>{this.props.item.name}</h2>
        <h2 className='card-description'> {this.props.item.description}</h2>
        <h2 className='card-cost'>${this.props.item.price}</h2>
        <div className='add-product' onClick={()=>this.props.onAdd(this.props.item)}>+</div>
        </div>
      </div>
    )
  }
}

export default item
