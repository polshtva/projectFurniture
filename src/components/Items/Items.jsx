import React, { Component } from 'react';
import Item from './Item';
import "./items.css"

export default class Items extends Component {
  render() {
    return  (
      <main className='items'>
        {this.props.items.map(el => (
          <Item key={el.id} item={el} onAdd={this.props.onAdd}/>
        ))}
      </main>
    );
  }
}
