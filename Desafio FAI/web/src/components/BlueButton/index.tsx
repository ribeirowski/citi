import React from "react";
import { ButtonContainer } from "./style";

interface Button {
    name: string;
}

export const BlueButton = (props:Button) => {
    return (
        <ButtonContainer type="submit"> {props.name} </ButtonContainer>
    );
};