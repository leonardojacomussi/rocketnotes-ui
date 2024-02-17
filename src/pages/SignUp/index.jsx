import { Container, Form, Background } from "./styles";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import Button from "../../components/Button";

const SignUp = () => {
  return (
    <Container>
      <Background />

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input
          type="text"
          name="name"
          label="Nome"
          placeholder="Nome"
          icon={FiUser}
        />
        <Input
          type="email"
          name="email"
          label="E-mail"
          placeholder="E-mail"
          icon={FiMail}
        />
        <Input
          type="password"
          name="password"
          label="Senha"
          placeholder="Senha"
          icon={FiLock}
        />
        <Button>
          Cadastrar
        </Button>
        <Link to="/">Voltar para o Login</Link>
      </Form>
    </Container>
  );
};

export default SignUp;