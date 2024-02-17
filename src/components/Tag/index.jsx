import { Container } from "./styles";
import PropTypes  from "prop-types";

const Tag = ({ children, ...props }) => {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
};

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool
};

export default Tag;