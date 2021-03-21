import {
  Description,
  Illustration,
  Logo,
  MainWrapper,
  Title,
} from './main.style';

const Main = () => (
  <MainWrapper>
    <Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <Title>React Boilerplate</Title>
    <Description>Typescrtipt, ReactJS, NextJS e Styled Components</Description>
    <Illustration
      src="/img/hero-illustration.svg"
      alt="Um programador de frente para uma tela com código."
    />
  </MainWrapper>
);

export default Main;
