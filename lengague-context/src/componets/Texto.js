import React, {useContext} from "react";
import { LengContext } from "./LengContext";
import ES from "./Leng.json";
import EN from "./Leng.json";

const Texto = () => {
     const mensajeContext = useContext(LengContext);
     let mensaje = "NADA";
     mensajeContext === "ES" ? mensaje = ES.ES.parrafo: mensaje = EN.EN.parrafo;
     return ( <p>{mensaje}</p>)
}

export default Texto;