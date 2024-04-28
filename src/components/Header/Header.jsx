import { useState } from "react";
import "./Header.css"
import { FaShoppingBag } from "react-icons/fa";
import Order from "./Order";


const showOrders = (props) =>{
  return (
    <div>
           {props.orders.map(el => (
                <Order key={el.id} item={el}/>
              ))}
    </div>
  )
}

const showNothing = () => {
    return (
      <div className="empty">
        <h2>Товаров нет</h2>
      </div>
    )
}

export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
      <div className="header__block">
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingBag onClick={() => setCartOpen(!cartOpen)} className={`shop-card-bootom ${cartOpen && 'active'}`}/>

        {cartOpen && (
          <div className="shop-cart">
              {props.orders.length >0 ? 
                  showOrders(props)  : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  )
}
