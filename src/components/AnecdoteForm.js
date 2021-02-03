import React from 'react';
import { useDispatch } from 'react-redux';

function AnecdoteForm() {
  const dispatch = useDispatch();

  const newNote = e => {
    e.preventDefault();
    console.log(e.target.note.value);
    const content = e.target.note.value;
    console.log(content);
    e.target.note.value = '';

    dispatch({
      type: 'ADD_NOTE',
      payload: {
        content
      }
    });
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={newNote}>
        <div>
          <input name='note' />
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  );
}

export default AnecdoteForm;
