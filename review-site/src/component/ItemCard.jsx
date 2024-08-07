import React from 'react';

function ItemCard({ item }) {
  return (
    <div className="item-card">
      <h3>{item.title}</h3>
      <p>Average Rating: {item.averageRating}</p>
    </div>
  );
}

export default ItemCard;