import { Link } from "react-router-dom";
import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Profile = () => {
  return (
    <Container>
      <header>
        <Link to="/"><FiArrowLeft /></Link>
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/leonardojacomussi.png"
            alt="Foto do usuário"
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>
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
          name="oldPassword"
          label="Senha atual"
          placeholder="Senha atual"
          icon={FiLock}
        />
        <Input
          type="password"
          name="newPassword"
          label="Nova senha"
          placeholder="Nova senha"
          icon={FiLock}
        />

        <Button>
          Salvar
        </Button>
      </Form>
    </Container>
  );
};

export default Profile;