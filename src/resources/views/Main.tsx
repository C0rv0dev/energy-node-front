import React from "react";
import api from '../../api';
import { Note } from '../../models/note';
import { useState, useEffect, useRef } from 'react';

function Main() {
  // variables
  const formRef = useRef<HTMLFormElement>(null);
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  // functions
  const fetchNotes = async () => {
    const response = await api.get('/notes');
    const { data } = response;
    setNotes(data);
  };

  const updateNote = (note: any) => {
    setSelectedNote(note);
  }

  const handleCreateOrUpdate = async () => {
    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const title = formData.get('title');
    const content = formData.get('content');

    if (selectedNote?._id) {
      await api.put(`/notes/${selectedNote._id}`, { title, content });
      fetchNotes();
      return;
    }

    await api.post('/notes', { title, content });
    fetchNotes();
  }

  const deleteNote = async (note: any) => {
    await api.delete(`/notes/${note._id}`);
    fetchNotes();
  }

  // effects
  useEffect(() => {
    fetchNotes();
  }, []);

  useEffect(() => {
    setSelectedNote(selectedNote);
  }, [selectedNote]);

  return (
    <>
      <div>
        <form ref={formRef}>
          <input
            type="text"
            name="title"
            placeholder="title"
            defaultValue={selectedNote?.title}
          />
          <input
            type="text"
            name="content"
            placeholder="content"
            defaultValue={selectedNote?.content}
          />
          <button onClick={() => handleCreateOrUpdate()}>
            Add
          </button>
        </form>

        <ul>
          {notes.map((note: any) => {
            return (
              <li key={note.id}>
                <h2>{note.title}</h2>
                <table>
                  <tr>
                    <th>#</th>
                    <th>#</th>
                  </tr>
                  <tbody>
                    <tr>
                      <td>
                        <button onClick={() => updateNote(note)}>
                          edit
                        </button>
                      </td>

                      <td>
                        <button onClick={() => deleteNote(note)}>
                          delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>{note.content}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Main;
