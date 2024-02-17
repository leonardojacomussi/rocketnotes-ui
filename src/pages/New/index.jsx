import { Link } from "react-router-dom";
import { Container, Form } from "./styles";
import Header from "../../components/Header";
import Section from "../../components/Section";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import NoteItem from "../../components/NoteItem";
import Button from "../../components/Button";

const New = () => {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input
            type="text"
            name="title"
            label="Título"
            placeholder="Título"
          />
          <TextArea
            name="description"
            label="Observações"
            placeholder="Observações"
          />

          <Section title="Links úteis">
            <NoteItem value={"https://www.leonardojacomussi.com/"}/>
            <NoteItem isNew placeholder="Novo link"/>
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value={"react"}/>
              <NoteItem isNew placeholder="Nova tag"/>
            </div>
          </Section>

          <Button type="submit">Salvar</Button>
        </Form>
      </main>
    </Container>
  );
};

export default New;