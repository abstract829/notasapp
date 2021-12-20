import axios from "axios";

export const fetchApi = axios.create({
  baseURL: "https://notesapp-next.netlify.app/api",
});

export const getNotes = async () => {
  const resp = await fetchApi.get("/notas");
  const data = resp.data;
  return data;
};

export const updateNote = async (note) => {
  const resp = await fetchApi.put(`/notas/${note.id}`, note);
  const data = resp.data;
  return data;
};

export const deleteNote = async (id) => {
  const resp = await fetchApi.delete(`/notas/${id}`);
  const data = resp.data;
  return data;
};

export const createNote = async () => {
  const resp = await fetchApi.post("/notas");
  const data = resp.data;
  return data;
};
