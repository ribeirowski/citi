import styled from 'styled-components';
import { barlow } from '../../styles/fonts';

export const ButtonContainer = styled.button`
    width: 320px;
    height: 48px;
    border-radius: 15px;
    border: 1px solid #58CBFB;
    background-color: #58CBFB;
    box-shadow: 0px 4px 4px 0px #00000040;

    font-family: ${barlow.style.fontFamily};
    font-weight: 700;
    font-size: 20px;
    color: #F5F5F5;

    &:hover, &:active{
        background-color: #F5F5F5;
        border: 2px solid #58CBFB;
        color: #292929;
    }
`;