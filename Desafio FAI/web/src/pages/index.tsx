import React from 'react';
import { HomeContainer } from './style';
import { BlueButton, InputBox, InputBoxCode } from 'components';

export default function Home() {
  return (
    <HomeContainer>
      <InputBox name='e-mail' type='email' />
      <br/>
      <InputBox name='senha' type='password' />
      <br/>
      <BlueButton name='entrar'/>
    </HomeContainer>
  );
}