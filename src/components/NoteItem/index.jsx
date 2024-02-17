import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles";
import PropTypes from "prop-types";

const NoteItem = ({ isNew, value, onClick, ...props }) => {
  return (
    <Container isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...props}
      />
      <button
        type="button"
        onClick={onClick}
        aria-label={isNew ? "Adicionar nota" : "Remover nota"}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
};

NoteItem.propTypes = {
  isNew: PropTypes.bool,
  value: PropTypes.string,
  onClick: PropTypes.func,
};

NoteItem.defaultProps = {
  isNew: false,
};

export default NoteItem;