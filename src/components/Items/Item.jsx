import React, { Component } from 'react';
import "./items.css"

export default class Item extends Component {
  render() {
    return (
      <div className='item'>
            <img src={"./img/" + this.props.item.img} alt="Фото товара"/>
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.desc}</p>
            <b>{this.props.item.price}$</b>
            <div className="add-to-cart" onClick={() => this.props.onAdd(this.props.item)}>+</div>
      </div>
    );
  } 
}
