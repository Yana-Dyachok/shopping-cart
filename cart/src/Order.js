import React, { Component } from 'react'
import { FaTrash } from "react-icons/fa";
export class Order extends Component {
  render() {
    return (
      <div>
      <div className='order-item'>
        <img className='order-card-img' src={"./img/"+this.props.item.img}/>
        <div className='order-block-text'>
        <h2 className='order-card-name'>{this.props.item.name}</h2>
        <h2 className='order-card-cost'>${this.props.item.price}</h2>
        </div>
        <div className='count-products'>0</div>
        <FaTrash className='delete-icon' onClick={()=>this.props.onDelete(this.props.item.id)}/>
      </div>
      <div></div>
      </div>
    )
  }
}

export default Order
