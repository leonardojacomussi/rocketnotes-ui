import { Container } from "./styles";
import PropTypes from "prop-types";

const Input = ({ icon: Icon, ...props }) => {
  return (
    <Container>
      {Icon && <Icon size={20}/>}
      <input {...props} />
    </Container>
  );
};

Input.propTypes = {
  icon: PropTypes.any,
};

export default Input;