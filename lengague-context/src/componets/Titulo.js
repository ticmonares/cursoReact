import React, {useContext} from "react";
import { LengContext } from "./LengContext";
import TextSetter from "./TextSetter";
import ES from "./Leng.json";
import EN from "./Leng.json";

const Titulo = () => {
     const mensajeContext = useContext(LengContext);
     let mensaje = "NADA";
     mensajeContext === "ES" ? mensaje = ES.ES.titulo: mensaje = EN.EN.titulo;
     // console.log(mensaje);
     return ( <h1>{mensaje}</h1>)
}

export default Titulo;