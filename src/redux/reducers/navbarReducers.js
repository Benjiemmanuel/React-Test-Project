// reducers.js
const initialState = {
    isScrolling: false
  };
  
  const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_NAVBAR_SCROLLING':
        return {
          ...state,
          isScrolling: action.payload
        };
      default:
        return state;
    }
  };
  
  export default navbarReducer;
  
  