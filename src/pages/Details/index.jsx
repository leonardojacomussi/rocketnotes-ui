import { Container, Links, Content } from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Tag from "../../components/Tag";
import Section from "../../components/Section";
import ButtonText from "../../components/ButtonText";

const Details = () => {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText isActive>Excluir nota</ButtonText>

          <h1>Introdução ao React</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="https://www.leonardojacomussi.com/" target="_blank" rel="noreferrer">https://www.leonardojacomussi.com/</a></li>
              <li><a href="https://www.otoh.com.br/" target="_blank" rel="noreferrer">https://www.otoh.com.br/</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag>React</Tag>
            <Tag>Express</Tag>
          </Section>

          <Button>Voltar</Button>
        </Content>
      </main>
    </Container>
  );
};

export default Details;