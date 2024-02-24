import { useState, useEffect, useCallback } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import Header from "../../components/Header";
import ButtonText from "../../components/ButtonText";
import Input from "../../components/Input";
import Section from "../../components/Section";
import Notes from "../../components/Notes";
import { FiPlus, FiSearch } from "react-icons/fi";

const Home = () => {
  const navigate = useNavigate();

  const [tags, setTags] = useState([]);
  const [notes, setNotes] = useState([]);

  const [searchTitle, setSearchTitle] = useState("");
  const [tagsSelected, setTagsSelected] = useState([]);

  const handleTagSelected = (tag) => {
    setTagsSelected((prev) => {
      if (prev.includes(tag)) {
        return prev.filter((item) => item !== tag);
      } else {
        return [...prev, tag];
      };
    });
  };

  const handleDetails = (noteId) => {
    navigate(`/details/${noteId}`);
  };

  const fetchNotes = useCallback(async () => {
    try {
      const response = await api.get("/notes", {
        params: {
          tags: tagsSelected.length > 0
            ? tagsSelected.map((tag) => tag.name).join(",")
            : "",
          title: searchTitle,
        },
      });
      setNotes(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [tagsSelected, searchTitle]);

  useEffect(() => {
    async function fetchTags () {
      try {
        const response = await api.get("/tags");
        setTags(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTags();
  }, []);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            isActive={tagsSelected.length === 0}
            onClick={() => setTagsSelected([])}
          >
            Todos
          </ButtonText>
        </li>
        {
          tags.map((tag) => (
            <li key={tag.id}>
              <ButtonText
                onClick={() => handleTagSelected(tag)}
                isActive={tagsSelected.includes(tag)}
              >
                {tag.name}
              </ButtonText>
            </li>
          ))
        }
      </Menu>

      <Search>
        <Input
          icon={FiSearch}
          placeholder="Pesquisar notas..."
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          {
            notes.map((note) => (
              <Notes key={note.id} data={note} onClick={() => handleDetails(note.id)}/>
            ))
          }
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
};

export default Home;