import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import Header from "../../components/Header";
import ButtonText from "../../components/ButtonText";
import Input from "../../components/Input";
import Section from "../../components/Section";
import Notes from "../../components/Notes";
import { FiPlus, FiSearch } from "react-icons/fi";

const Home = () => {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText isActive>Todos</ButtonText></li>
        <li><ButtonText>React JS</ButtonText></li>
        <li><ButtonText>Node JS</ButtonText></li>
      </Menu>

      <Search>
        <Input icon={FiSearch} placeholder="Pesquisar notas..." />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Notes data={{
            title: "Anotações de React JS",
            tags: [
              { id: 1, name: "React JS" },
              { id: 2, name: "Front-end" },
            ]
          }} />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
};

export default Home;