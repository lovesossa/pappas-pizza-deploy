import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchSnacks = (sortBy, category) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });
  axios
    .get(
      `http://localhost:3001/snacks`,
    )
    .then(({ data }) => {
      dispatch(setSnacks(data));
    });
};

export const setSnacks = (snackItems) => ({
  type: 'SET_SNACKS',
  payload: snackItems,
});