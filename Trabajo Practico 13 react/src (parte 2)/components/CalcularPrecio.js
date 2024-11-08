import React, { useState } from 'react';

function CalcularPrecio() {
    const [productos, setProductos] = useState([
        { nombre: 'Producto 1', precio: 10 },
        { nombre: 'Producto 2', precio: 20 },
        { nombre: 'Producto 3', precio: 30 },
    ]);

    const calcularTotal = () => {
        return productos.reduce((total, producto) => total + producto.precio, 0);
    };

    return (
        <div>
            <h1>Precio Total de Productos</h1>
            <ul>
                {productos.map((producto, index) => (
                    <li key={index}>{producto.nombre}: ${producto.precio}</li>
                ))}
            </ul>
            <p>Total: ${calcularTotal()}</p>
        </div>
    );
}

export default CalcularPrecio;
