import { useState } from "react";
import { FaUser } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";
import { api } from "../../services/api";

const Profile = () => {
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : null;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  const handleBack = () => {
    navigate(-1);
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();

    const updated = {
      name,
      email,
      password: newPassword,
      oldPassword: oldPassword,
    };

    const updatedUser = Object.assign(user, updated);

    updateUser({ user: updatedUser, avatarFile });
  };

  const handleChangeAvatar = (e) => {
    const file = e.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  };

  return (
    <Container>
      <header>
        <ButtonText onClick={handleBack}>
          <FiArrowLeft />
        </ButtonText>
      </header>

      <Form onSubmit={handleUpdateUser}>
        <Avatar>
          {
            !avatar
              ? <FaUser style={{ fill: "#FFFFFF" }} />
              : <img
              src={avatar}
              alt={user.name}
            />
          }
          <label htmlFor="avatar">
            <FiCamera />
            <input
              type="file"
              id="avatar"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>
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
          name="oldPassword"
          label="Senha atual"
          placeholder="Senha atual"
          icon={FiLock}
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <Input
          type="password"
          name="newPassword"
          label="Nova senha"
          placeholder="Nova senha"
          icon={FiLock}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <Button type="submit">
          Salvar
        </Button>
      </Form>
    </Container>
  );
};

export default Profile;