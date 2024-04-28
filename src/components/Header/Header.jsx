import { useState } from "react";
import "./Header.css"
import { FaShoppingBag } from "react-icons/fa";

export default function Header() {
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

          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  )
}
