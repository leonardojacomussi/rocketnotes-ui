import { useState } from "react";
import { Container, Form, Background } from "./styles";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import ButtonText from "../../components/ButtonText";
import Button from "../../components/Button";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleBack = () => {
    navigate(-1);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    };

    try {
      const res = await api.post("/users", { name, email, password });
      if (res.status === 201) {
        alert("Usuário criado com sucesso!");
        return navigate("/");
      };
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message);
      } else {
        return alert("Erro ao criar usuário, tente novamente mais tarde.");
      };
    };
  };

  return (
    <Container>
      <Background />

      <Form onSubmit={handleSignUp}>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input
          type="text"
          name="name"
          label="Nome"
          placeholder="Nome"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          Cadastrar
        </Button>
        <ButtonText className="back" onClick={handleBack}>
          Voltar para o Login
        </ButtonText>

      </Form>
    </Container>
  );
};

export default SignUp;