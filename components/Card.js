import { useNotes } from "../hooks/useNotes";
import { useEffect, useRef, useState } from "react";
import { updateNote } from "../services/notas";

const Card = ({ note }) => {
  const { deleteNoteAndUpdate } = useNotes();
  const [newBody, setNewBody] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [isEditingBody, setIsEditingBody] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const cardBodyRef = useRef(null);
  const inputCardBodyRef = useRef(null);
  const cardTitleRef = useRef(null);
  const inputCardTitleRef = useRef(null);
  const { id, title, body } = note;
  useEffect(() => {
    setNewBody(body);
    setNewTitle(title);
  }, [body, title]);

  const handleTitleEdit = async () => {
    const cardTitle = cardTitleRef.current;
    const inputCardTitle = inputCardTitleRef.current;
    if (isEditingTitle) {
      cardTitle.className = "block text-xl font-bold break-words";
      inputCardTitle.className = "hidden";
      setIsEditingTitle(false);
      await updateNote({ id: note.id, title: newTitle, body: newBody });
    } else {
      setIsEditingTitle(true);
      cardTitle.className = "hidden";
      inputCardTitle.className =
        "block w-full text-xl font-bold break-words bg-sky-300";
      inputCardTitle.focus();
    }
  };
  const handleBodyEdit = async () => {
    const cardBody = cardBodyRef.current;
    const inputCardBody = inputCardBodyRef.current;
    if (isEditingBody) {
      cardBody.className = "block my-4 text-lg text-justify break-words";
      inputCardBody.className = "hidden";
      setIsEditingBody(false);
      await updateNote({ id: note.id, title: newTitle, body: newBody });
    } else {
      setIsEditingBody(true);
      cardBody.className = "hidden";
      inputCardBody.className =
        "block w-full my-4 overflow-hidden text-lg break-words bg-sky-300";
      inputCardBody.focus();
    }
  };
  return (
    <div className="col-span-12 px-6 py-2 text-center rounded bg-sky-300 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
      <div className="flex justify-between gap-4 py-2">
        <img
          onClick={handleBodyEdit}
          className="cursor-pointer"
          src="/icons/edit.svg"
          alt="edit"
        />
        <h2
          onDoubleClick={handleTitleEdit}
          ref={cardTitleRef}
          className="text-xl font-bold"
        >
          {newTitle}
        </h2>
        <input
          ref={inputCardTitleRef}
          value={newTitle}
          className="hidden"
          type="text"
          onChange={(e) => setNewTitle(e.target.value)}
          onBlur={handleTitleEdit}
        />
        <img
          onClick={() => deleteNoteAndUpdate(id)}
          className="cursor-pointer"
          src="/icons/delete.svg"
          alt="delete"
        />
      </div>
      <p
        onDoubleClick={handleBodyEdit}
        ref={cardBodyRef}
        className="my-4 text-lg text-justify"
      >
        {newBody}
      </p>
      <textarea
        wrap="hard"
        ref={inputCardBodyRef}
        className="hidden"
        value={newBody}
        onChange={(e) => setNewBody(e.target.value)}
        onBlur={handleBodyEdit}
      />
    </div>
  );
};

export default Card;
