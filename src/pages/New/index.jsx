import { useState } from "react";
import { Container, Form } from "./styles";
import Header from "../../components/Header";
import Section from "../../components/Section";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import NoteItem from "../../components/NoteItem";
import Button from "../../components/Button";
import { api } from "../../services/api";
import ButtonText from "../../components/ButtonText";
import { useNavigate } from "react-router-dom";

const New = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const handleBack = () => {
    navigate(-1);
  };

  const handleAddLink = () => {
    setLinks((oldLinks) => [...oldLinks, newLink]);
    setNewLink("");
  };

  const handleRemoveLink = (link) => {
    setLinks((oldLinks) => oldLinks.filter((oldLink) => oldLink !== link));
  };

  const handleAddTag = () => {
    setTags((oldTags) => [...oldTags, newTag]);
    setNewTag("");
  };

  const handleRemoveTag = (tag) => {
    setTags((oldTags) => oldTags.filter((oldTag) => oldTag !== tag));
  };

  const handleSubmitNewNote = async (e) => {
    e.preventDefault();
    const data = {
      title,
      description,
      links,
      tags,
    };
    try {
      if (!title) {
        return alert("Digite um título para a nota!");
      };

      if (links.length === 0) {
        return alert("Adicione pelo menos um link útil para a nota!");
      };

      if (tags.length === 0) {
        return alert("Adicione pelo menos uma tag para a nota!");
      };

      if (newLink) {
        return alert("Você deixou um link no campo para adicionar, mas não clicou em adicionar\n\nClique em adicionar para adicionar o link ou apague o texto do campo.");
      };

      if (newTag) {
        return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar\n\nClique em adicionar para adicionar a tag ou apague o texto do campo.");
      };

      await api.post("/notes", data);
      setTitle("");
      setDescription("");
      setLinks([]);
      setTags([]);
      alert("Nota criada com sucesso!");
      return navigate(-1);
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message);
      } else {
        return alert("Ops! Aconteceu um erro, tente novamente mais tarde.");
      };
    };
  }

  return (
    <Container>
      <Header />

      <main>
        <Form onSubmit={handleSubmitNewNote}>
          <header>
            <h1>Criar nota</h1>
            <ButtonText onClick={handleBack}>
              Voltar
            </ButtonText>
          </header>

          <Input
            type="text"
            name="title"
            label="Título"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea
            name="description"
            label="Observações"
            placeholder="Observações"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {
              links.map((link, index) => (
                <NoteItem
                  key={index+link}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              ))
            }
            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onClick={handleAddLink}
              onChange={(e) => setNewLink(e.target.value)}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={index+tag}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }
              <NoteItem
                isNew
                placeholder="Nova tag"
                value={newTag}
                onClick={handleAddTag}
                onChange={(e) => setNewTag(e.target.value)}
              />
            </div>
          </Section>

          <Button type="submit">Salvar</Button>
        </Form>
      </main>
    </Container>
  );
};

export default New;