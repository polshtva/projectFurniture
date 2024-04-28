import React, { Component } from 'react'
import "./Header.css"

export class Order extends Component {
  render() {
    return (
      <div className='item'>
            <img src={"./img/" + this.props.item.img} alt="Фото товара"/>
            <h2>{this.props.item.title}</h2>
            <b>{this.props.item.price}$</b>
      </div>
    )
  }
}

export default Order