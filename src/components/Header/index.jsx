import { FaUser } from "react-icons/fa";
import { api } from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";

const Header = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : null;

  const handleSignOut = () => {
    signOut();
    navigate("/");
  };

  return (
    <Container>
      <Profile to="/profile">
        {
          !avatarUrl
            ? <FaUser style={{ fill: "#FFFFFF" }} />
            : <img
            src={avatarUrl}
            alt={user.name}
          />
        }
        <div>
          <span>Bem-vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>
      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
};

export default Header;