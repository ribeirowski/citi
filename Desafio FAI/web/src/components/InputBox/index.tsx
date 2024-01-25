import React from "react";
import { InputContainer } from "./style";

interface Input {
    name: string;
    type: string;
}

export const InputBox = (props:Input) => {
    return (
        <InputContainer type={props.type} placeholder={props.name}/>
    );
};