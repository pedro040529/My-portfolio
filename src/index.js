import React from "react";
import ReactDOM from "react-dom/client";
import { Datos } from "./datos";
import {Button} from "./button";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    
    <Button text = "paga con visa" />
    <Button text = "paga con mastercard" />
    <Button text = "pago efectivo" />


    {/* <Datos 
    nombre="Crispin" 
    edad="3 años" 
    estatura={1} 
    comida_favorita="pan" 
    /> */}
  </>
);
