import { createContext, useState, useEffect } from "react";
import { getNotes } from "../services/notas";

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState();
  const fetchData = async () => {
    const resp = await getNotes();
    setNotes(resp.notas);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <NotesContext.Provider
      value={{
        notes,
        fetchData,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
