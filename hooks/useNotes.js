import { createNote, deleteNote } from "../services/notas";
import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import Swal from "sweetalert2";
export const useNotes = () => {
  const { notes, fetchData } = useContext(NotesContext);

  const createNoteAndUpdate = async () => {
    if (notes.length >= 12) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No puedes crear mas notas!",
        footer: "Elimina algunas notas para crear mas",
      });
    } else {
      const resp = await createNote();
      if (resp.ok) {
        fetchData();
      }
    }
  };
  const deleteNoteAndUpdate = (id) => {
    Swal.fire({
      title: "Seguro que quieres eliminar esta nota?",
      text: "La nota no se podra recuperar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, continuar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const resp = await deleteNote(id);
        if (resp.ok) {
          fetchData();
        }
        Swal.fire(
          "Eliminado!",
          "La nota ha sido eliminada correctamente.",
          "success"
        );
      }
    });
  };
  return {
    notes,
    createNoteAndUpdate,
    deleteNoteAndUpdate,
  };
};
