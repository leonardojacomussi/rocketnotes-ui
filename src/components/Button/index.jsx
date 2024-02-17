import { Container } from "./styles";
import PropTypes  from "prop-types";

const Button = ({ children, loading, ...props }) => {
  return (
    <Container
      type="button"
      disabled={loading}
      {...props}
    >
      {loading ? "Carregando..." : children}
    </Container>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  loading: PropTypes.bool
};

Button.defaultProps = {
  loading: false
};

export default Button;