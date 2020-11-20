import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchDrinks = (sortBy, category) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });
  axios
    .get(
      `http://localhost:3001/drinks`,
    )
    .then(({ data }) => {
      dispatch(setDrinks(data));
    });
};

export const setDrinks = (drinkItems) => ({
  type: 'SET_DRINKS',
  payload: drinkItems,
});