import React, { useState, useEffect } from 'react';

function Ejercicio1() {
    const [contador, setContador] = useState(0);
    useEffect(() => {
        const intervalo = setInterval(() => {
            setContador(contador => contador + 1);
        }, 1000);
    }, []);
    return (
        <div>
            <h1>Contador Automático: {contador}</h1>
        </div>
    )
}

export default Ejercicio1