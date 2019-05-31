import React from 'react';

import { FiTrash2 } from 'react-icons/fi';
import './CartListItem.scss';

const CartListItem = ({ product, amount, updateCartAmount, deleteFromCart }) => {
  const isDisabled = (amount === 1) ? true : false;
  return (
    <div className="CartListItem">
      <div className="pic-section">
        <img className="pic" src={require(`../../data${product.pic}`)} alt={product.title} />
      </div>
      <div className="info-section">
        <h5 className="author">{product.author}</h5>
        <h2 className="title">{product.title}</h2>
        <h3 className="subtitle">{product.subtitle}</h3>
      </div>
      <div className="numbers-section">
        <div className="price-container">
          <h2 className="price">${product.price}</h2>
        </div>
        <div className="amount-container">
          <button className="small-btn" aria-label="Zmniejsz ilość" onClick={() => updateCartAmount(product.id, -1)} disabled={isDisabled}>-</button>
          <span className="margin">{amount}</span>
          <button className="small-btn" aria-label="Zwiększ ilość" onClick={() => updateCartAmount(product.id, 1)}>+</button>
          <span className="margin">😎</span>
          <button className="small-btn icon" aria-label="Usuń" onClick={() => deleteFromCart(product.id)}><FiTrash2 /></button>
        </div>
      </div>
    </div>
  );
}

export default CartListItem;
