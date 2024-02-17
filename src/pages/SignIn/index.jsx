import { Container, Form, Background } from "./styles";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";
import Button from "../../components/Button";

const SignIn = () => {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

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
          Entrar
        </Button>

        <Link to="/register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  );
};

export default SignIn;