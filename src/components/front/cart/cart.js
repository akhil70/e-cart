import React, {  useContext } from 'react';
import { MyCart } from '../../../App';
import './cart.css'


function Cart({ handleAddToCart, handleRemoveProduct, handleCartClear,HandleAddCount }) {
  const CartItems = useContext(MyCart);
  console.log("stateeeeeeee", CartItems)
  const totalprice = CartItems.reduce((price, item) => price + item.quantity * item.price, 0);

  return (
    <div className='cart-items'>
      <h2 className='cart-items-header'>
        Cart items
      </h2>
      <div className='clear-cart'>{CartItems.length >= 1 && (<button className='clear-cart-button' onClick={handleCartClear}>clear Cart</button>)}</div>
      {CartItems && CartItems.length === 0 ? (
        <h2 className='cartitems-empty'>No Items in Cart</h2>
      ) : null}

      <div>
        {CartItems.map((item) => {
          return (
            <div key={item.id} className="cart-item-list">
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className='cart-item-name'>{item.name}</div>
              <div className='cart-item-function'>
                <button className='cart-item-add' onClick={() => HandleAddCount(item)}>+</button>
                <button className='cart-item-remove' onClick={() => handleRemoveProduct(item)}>-</button>

              </div>
              <div className='cart-items-price'>
                {item.quantity}*{item.price}
              </div>
            </div>
          );
        })}
      </div>
      <div className='cart-item-total-price-name' style={{ color: "white" }}>
        Total price &nbsp; &nbsp;
        <div className='cart-items-total-price'>{totalprice}</div>
      </div>

    </div>
  )
}

export default Cart