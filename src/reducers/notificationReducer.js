const initialState = {};
console.log(initialState);

export const notificationAddVote = id => {
  return {
    type: 'VOTE',
    payload: id
  };
};

export const notificationAddNote = content => {
  return {
    type: 'ADD_NOTE',
    payload: content
  };
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE':
      const id = action.payload;
      console.log('id from notification', id);
      return state;
    case 'ADD_NOTE':
      const content = action.payload;
      console.log('content from notification', content);
      return state;
    default:
      return state;
  }
};

export default notificationReducer;
