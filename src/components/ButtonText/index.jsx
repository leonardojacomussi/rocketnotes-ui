import { Container } from "./styles";
import PropTypes  from "prop-types";

const ButtonText = ({ children, isActive, ...props }) => {
  return (
    <Container
      type="button"
      isActive={isActive}
      {...props}
    >
      {children}
    </Container>
  );
};

ButtonText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  isActive: PropTypes.bool
};

ButtonText.defaultProps = {
  isActive: false
};

export default ButtonText;