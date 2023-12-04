import React from "react";
import { Mangue, LogoCITi2 } from "../../assets";
import { Container, HomeContainer, LogoContainer, ImageContainer, LoginContainer, Headline, SubTitle, Title1, Title2, Button, TitleContainer, InputContainer} from "./styles";

export const Desafio: React.FC = () => {
    return (
        <Container>
            <HomeContainer>
                <LogoContainer>
                    <img src={LogoCITi2.src} alt="citi"/>
                </LogoContainer>
                <LoginContainer>
                    <Headline >Acesse a plataforma</Headline>
                    <SubTitle>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</SubTitle>
                    <Title1>E-mail</Title1>
                    <InputContainer type="email" placeholder="Digite seu e-mail"/>
                    <TitleContainer>
                        <Title1>Senha</Title1>
                        <Title2>Esqueceu a senha?</Title2>
                    </TitleContainer>
                    <InputContainer type="password" placeholder="Digite sua senha"/>
                    <Button onClick={Cadastro}>Entrar</Button>
                </LoginContainer>
            </HomeContainer>
            <ImageContainer>
                <img src={Mangue.src} alt="mangue"/>
            </ImageContainer>
        </Container>
    );
}

function Cadastro() {
    console.log("cadastrado");
}