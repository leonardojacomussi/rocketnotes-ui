import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Input from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";
import Button from "../../components/Button";
import { Container, Form, Background } from "./styles";

const SignIn = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Preencha todos os campos!");
    };

    await signIn({ email, password });
  };

  return (
    <Container>
      <Form onSubmit={handleSignIn}>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <Input
          type="email"
          name="email"
          label="E-mail"
          placeholder="E-mail"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          name="password"
          label="Senha"
          placeholder="Senha"
          icon={FiLock}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">
          Entrar
        </Button>

        <Link to="/register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  );
};

export default SignIn;