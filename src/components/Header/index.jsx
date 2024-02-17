import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";

const Header = () => {
  return (
    <Container>
      <Profile to="/profile">
        <img
          src="https://github.com/leonardojacomussi.png"
          alt="Foto do usuário"
        />
        <div>
          <span>Bem-vindo</span>
          <strong>Leonardo Jacomussi</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
};

export default Header;