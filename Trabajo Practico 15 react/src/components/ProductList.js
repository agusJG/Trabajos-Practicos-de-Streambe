import React from 'react';

const products = [
  { id: 1, name: 'Producto 1',desc: 'producto 1 se trata de ...', price: '$1000' },
  { id: 2, name: 'Product0 2',desc: 'producto 2 se trata de ...', price: '$2000' },
];

const ProductList = () => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.desc}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
