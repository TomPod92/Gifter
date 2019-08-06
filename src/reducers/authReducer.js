export default (state = {}, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          uid: action.payload.uid,
          email: action.payload.email,
          displayName: action.payload.displayName
        };
      case 'LOGOUT':
        return {};
      default:
        return state;
    }
  };  