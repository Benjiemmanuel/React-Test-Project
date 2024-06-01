export const SET_SLIDE = "SET_SLIDE";
export const NEXT_SLIDE = "NEXT_SLIDE";

export const setSlide = (index) => ({
  type: SET_SLIDE,
  payload: index
});

export const nextSlide = () => ({
  type: NEXT_SLIDE
});
