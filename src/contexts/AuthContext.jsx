import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

  const [data, setData] = useState({});

  const signIn = async ({ email, password }) => {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@RocketNotes:user", JSON.stringify(user));
      localStorage.setItem("@RocketNotes:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user, token });

    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message);
      } else {
        return alert("Erro ao realizar login, tente novamente mais tarde.");
      };
    };
  };

  const signOut = () => {
    localStorage.removeItem("@RocketNotes:user");
    localStorage.removeItem("@RocketNotes:token");
    api.defaults.headers.common["Authorization"] = undefined;
    setData({});
  };

  const updateUser = async ({ user, avatarFile }) => {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);
        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      };

      await api.put("/users", user);
      localStorage.setItem("@RocketNotes:user", JSON.stringify(user));
      setData((oldData) => ({ ...oldData, user }));
      alert("Usuário atualizado com sucesso!");
    } catch (error) {
      console.log(error);
      if (error.response) {
        return alert(error.response.data.message);
      } else {
        return alert("Erro ao atualizar usuário, tente novamente mais tarde.");
      };
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("@RocketNotes:user");
    const token = localStorage.getItem("@RocketNotes:token");

    if (user && token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user: JSON.parse(user), token });
    };
  }, []);

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      updateUser,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };