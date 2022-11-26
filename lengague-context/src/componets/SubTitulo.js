import React, {useContext} from "react";
import { LengContext } from "./LengContext";
import ES from "./Leng.json";
import EN from "./Leng.json";

const SubTitulo = () => {
     const mensajeContext = useContext(LengContext);
     let mensaje = "NADA";
     mensajeContext === "ES" ? mensaje = ES.ES.subtitulo: mensaje = EN.EN.subtitulo;
     return ( <h3>{mensaje}</h3>)
}


export default SubTitulo;