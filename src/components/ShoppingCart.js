import React from 'react';

const ShoppingCart = ({ cartItems }) => {
  return (
    <div className="bg-white p-4 shadow rounded-md">
      <h2 className="text-lg font-bold">Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
