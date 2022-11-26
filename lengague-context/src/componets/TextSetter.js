import React, {useContext} from "react";
import { LengContext } from "./LengContext";
import ES from "./Leng.json";
import EN from "./Leng.json";

const TextSetter = () => {
    // const mensaje = useContext(LengContext);
    let selectedLengage
    LengContext === "ES" ?  selectedLengage = ES : selectedLengage = EN;
    return selectedLengage
}

export default TextSetter;