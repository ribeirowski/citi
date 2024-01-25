import styled from 'styled-components';
import { barlow } from '../../styles/fonts';

export const InputContainer = styled.input`
    width: 40px;
    height: 40px;
    padding: 13px;
    border-radius: 4px;
    border: 2px solid #D9D9D9;
    background-color: #FFFFFF;
    outline: 0;

    font-family: ${barlow.style.fontFamily};
    font-weight: 400;
    font-size: 16px;
    color: #0E0E0E;

    &::placeholder{
        color: #787878;
    }

    &:focus{
        background-color: #D6EDF6;
        &::placeholder{
            color: #0E0E0E;
        }
        border: 2px solid #58CBFB;
    }
`;