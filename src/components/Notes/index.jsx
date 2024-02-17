import { Container } from "./styles";
import PropTypes from "prop-types";
import Tag from "../Tag";

const Notes = ({ data, ...props }) => {
  const { title, tags } = data;
  return (
    <Container {...props}>
      <h1>{title}</h1>
      {
        tags &&
        <footer>
          {tags.map(tag => <Tag key={tag.id}>{tag.name}</Tag> )}
        </footer>
      }
    </Container>
  );
};


Notes.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }))
  })
};


export default Notes;