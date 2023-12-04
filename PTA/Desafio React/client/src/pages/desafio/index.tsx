import React from "react";
import { Mangue, LogoCITi2 } from "../../assets";
import { Container, HomeContainer, LogoContainer, TextContainer, ImageContainer, LoginContainer, Headline, SubTitle, Title1, Title2, Button, TitleContainer, InputContainer} from "./styles";
import { titillium700, titillium600, titillium400 } from "styles/fonts";

export const Desafio: React.FC = () => {
    return (
        <Container>
            <HomeContainer>
                <LogoContainer>
                    <img src={LogoCITi2.src} alt="citi"/>
                </LogoContainer>
                <TextContainer>
                    <Headline className={titillium700.className}>Acesse a plataforma</Headline>
                    <SubTitle className={titillium400.className}>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</SubTitle>
                </TextContainer>
                <LoginContainer>
                    <Title1 className={titillium600.className}>E-mail</Title1>
                    <InputContainer type="email" placeholder="Digite seu e-mail" className={titillium400.className}/>
                    <TitleContainer>
                        <Title1 className={titillium600.className}>Senha</Title1>
                        <Title2 className={titillium600.className}>Esqueceu a senha?</Title2>
                    </TitleContainer>
                    <InputContainer type="password" placeholder="Digite sua senha" className={titillium400.className}/>
                    <Button onClick={Cadastro} className={titillium700.className}>Entrar</Button>
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