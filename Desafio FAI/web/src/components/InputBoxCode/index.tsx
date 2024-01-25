import React from "react";
import { InputContainer } from "./style";

interface Input {
    type: string;
}

export const InputBoxCode = (props:Input) => {
    return (
        <InputContainer type={props.type} />
    );
};