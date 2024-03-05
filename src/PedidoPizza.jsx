import { useState, useEffect } from "react";
import PizzaOrder from "./PizzaOrder";

const PedidoPizza = () => {
  const [order, setOrder] = useState(null);
  const [mostarOrden, setMostrarOrden] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOrder("Napolitana");
    }, 2000);
  }, []);

  useEffect(() => {
    console.log("Componente actualizado");
  });

  const handleCancelOrder = () => {
    alert("Pedido cancelado");
    setMostrarOrden(false);
  };

  return (
    <div>
      <h1>Tu Pedido de Pizza es: </h1>
      {mostarOrden && <PizzaOrder nombre={order} />}
      <button onClick={handleCancelOrder}>Cancelar pedido</button>
    </div>
  );
};

export default PedidoPizza;
