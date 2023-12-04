import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const LogoContainer = styled.div`
    display: flex;
    padding-top: 7rem;
    padding-left: 10rem;
`;

export const LoginContainer = styled.div`
    width: 28.4vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding-top: 8rem;
    padding-left: 10rem;
`;

export const ImageContainer = styled.div`
    height: 100vh;
    display: flex;
`;

export const Headline = styled.h2`
    font-family: Roboto;
    font-size: 36px;
    font-weight: 700;
    text-align: left;
    color: #1E293B;
    
    @media (max-width: 720px) {
        font-size: 30px;
    }
`;

export const SubTitle = styled.p`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    color: #475569;
    padding-top: 1.5rem;
    padding-bottom: 3rem;
    
    @media (max-width: 720px) {
        font-size: 12px;
    }
`;

export const Title1 = styled.p`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 600;
    text-align: left;
    color: #1E293B;

    @media (max-width: 720px) {
        font-size: 12px;
    }
`;

export const Title2 = styled.p`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 600;
    color: #51E678;

    @media (max-width: 720px) {
        font-size: 12px;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const InputContainer = styled.input`
    width: 24rem;
    height: 3.5rem;
    border-radius: 4px;
    border: 1px solid #94A3B8;
    color: #1E293B;
    padding: 0 0 0 16px;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    outline: 0;

    &::placeholder{
        color: #94A3B8;
    }

    &:focus{
        border: 1px solid #51E678;
    }

    @media (max-width: 720px) {
        width: 15rem;
    }
`;

export const Button = styled.button`
    width: 24rem;
    height: 3.5rem;
    background-color: #51E678;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    margin-top: 0.5rem;
    color: #ffffff;
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 700;

    &:hover{
        background-color: #57FF86;
    }
`;