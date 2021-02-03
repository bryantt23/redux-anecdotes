import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { anecdoteVote } from '../reducers/anecdoteReducer';
import {
  notificationAddVote,
  notificationHide
} from '../reducers/notificationReducer';

function AnecdoteList() {
  const anecdotes = useSelector(state => state.anecdotes);
  const dispatch = useDispatch();

  const vote = (id, content) => {
    dispatch(anecdoteVote(id));
    dispatch(notificationAddVote(content));
    // https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout
    setTimeout(() => {
      dispatch(notificationHide());
    }, 5000);
  };

  let sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes);
  return (
    <div>
      {sortedAnecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AnecdoteList;
