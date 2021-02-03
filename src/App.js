import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const anecdotes = useSelector(state => state);
  const dispatch = useDispatch();

  const vote = id => {
    dispatch({ type: 'VOTE', payload: id });
    console.log('vote', id);
  };

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

  let sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes);
  return (
    <div>
      <h2>Anecdotes</h2>
      {sortedAnecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <form onSubmit={newNote}>
        <div>
          <input name='note' />
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  );
};

export default App;
