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
    align-items: left;
`;

export const LogoContainer = styled.div`
    display: flex;
    padding-top: 7rem;
    padding-left: 10rem;
`;

export const TextContainer = styled.div`
    display: flex;
    width: 26vw;
    flex-direction: column;
    padding-top: 7rem;
    padding-left: 10rem;
`;

export const LoginContainer = styled.div`
    width: 28.4vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding-left: 10rem;
`;

export const ImageContainer = styled.div`
    height: 100vh;
    display: flex;
`;

export const Headline = styled.h2`
    font-size: 36px;
    color: #1E293B;
    
    @media (max-width: 720px) {
        font-size: 30px;
    }
`;

export const SubTitle = styled.p`
    font-size: 16px;
    color: #475569;
    padding-top: 1.5rem;
    padding-bottom: 2rem;
    
    @media (max-width: 720px) {
        font-size: 12px;
    }
`;

export const Title1 = styled.p`
    font-size: 14px;
    color: #1E293B;

    @media (max-width: 720px) {
        font-size: 12px;
    }
`;

export const Title2 = styled.p`
    font-size: 14px;
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
    margin-bottom: 1.2rem;
    font-size: 14px;
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
    font-size: 16px;

    &:hover{
        background-color: #57FF86;
    }
`;