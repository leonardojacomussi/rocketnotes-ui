import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch; // estica o conteúdo para ocupar a tela toda
`;

export const Form = styled.form`
  padding: 0 13.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 4.8rem;
    color: ${props => props.theme.COLORS.ORANGE};
  };

  > h2 {
    font-size: 2.4rem;
    margin: 4.8rem 0;
  };

  > p {
    font-size: 1.4rem;
    color: ${props => props.theme.COLORS.GRAY_100};
  };

  > button.back {
    margin-top: 12.4rem;
    color: ${props => props.theme.COLORS.ORANGE};
  };

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 2.4rem;
  };
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 0.3;

  @media (max-width: 768px) {
    display: none;
  };
`;