import { Container, Links, Content } from "./styles";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Tag from "../../components/Tag";
import { api } from "../../services/api";
import Section from "../../components/Section";
import ButtonText from "../../components/ButtonText";

const Details = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [note, setNote] = useState({});

  const handleBack = () => {
    navigate(-1);
  };

  const handleDelete = async () => {
    try {
      const confirm = window.confirm("Deseja realmente excluir esta nota?");
      if (!confirm) return;
      await api.delete(`/notes/${id}`);
      navigate(-1);
    } catch (error) {
      console.error(error);
    };
  };

  useEffect(() => {
    async function fetchNote() {
      try {
        const response = await api.get(`/notes/${id}`);
        setNote(response.data);
      } catch (error) {
        console.error(error);
      };
    };

    fetchNote();
  }, [id]);

  return (
    <Container>
      <Header />
      {
        note &&
          <main>
            <Content>
              <ButtonText isActive onClick={handleDelete}>
                Excluir nota
              </ButtonText>

              <h1>{note.title}</h1>
              <p>{note.description}</p>

              {
                note.links &&
                  <Section title="Links úteis">
                    <Links>
                      {
                        note.links.map((link, index) => (
                          <li key={index+link}>
                            <a href={link.url} target="_blank" rel="noreferrer">{link.url}</a>
                          </li>
                        ))
                      }
                    </Links>
                  </Section>
              }

              {
                note.tags &&
                  <Section title="Marcadores">
                    {
                      note.tags.map((tag) => (
                        <Tag key={tag.id}>{tag.name}</Tag>
                      ))
                    }
                  </Section>
              }

              <Button onClick={handleBack}>
                Voltar
              </Button>
            </Content>
          </main>
      }
    </Container>
  );
};

export default Details;