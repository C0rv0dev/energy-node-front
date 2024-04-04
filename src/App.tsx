import api from './api';
import { useState, useEffect } from 'react';

function App() {
  // variables
  const [notes, setNotes] = useState([]);

  // functions
  const fetchNotes = async () => {
    const response = await api.get('/notes');
    const { data } = response;

    console.log(data);

    setNotes(data);
  };

  // effects
  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <div>
        hi
      </div>
    </>
  );
}

export default App;
