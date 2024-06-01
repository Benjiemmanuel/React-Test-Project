import { SET_SLIDE, NEXT_SLIDE } from "../actions/carouselActions";

const initialState = {
  slide: 0,
  data: [], // Add the data property to the initial state
};

const carouselReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SLIDE:
      return {
        ...state,
        slide: action.payload,
      };
    case NEXT_SLIDE:
      // Ensure data array exists and has length > 0 before calculating next slide
      if (state.data && state.data.length > 0) {
        return {
          ...state,
          slide: (state.slide + 1) % state.data.length,
        };
      } else {
        return state; // Return current state if data is not available
      }
    default:
      return state;
  }
};

export default carouselReducer;
