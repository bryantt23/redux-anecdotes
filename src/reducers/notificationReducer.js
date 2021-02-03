const initialState = {};
console.log(initialState);

export const notificationAddVote = content => {
  return {
    type: 'ADD_VOTE_NOTIFICATION',
    payload: content
  };
};

export const notificationAddNote = content => {
  return {
    type: 'ADD_NOTE_NOTIFICATION',
    payload: content
  };
};

const notificationReducer = (state = initialState, action) => {
  let content, message;

  switch (action.type) {
    case 'ADD_VOTE_NOTIFICATION':
      content = action.payload;
      console.log('content from notification', content);
      message = `You voted for note: ${content}`;
      console.log('message', message);

      return { ...state, message };
    case 'ADD_NOTE_NOTIFICATION':
      content = action.payload;
      // console.log('content from notification', X);
      message = `You created note: ${content}`;
      return { ...state, message };
    default:
      return state;
  }
};

export default notificationReducer;
