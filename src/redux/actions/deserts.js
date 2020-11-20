import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchDeserts = (sortBy, category) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });
  axios
    .get(
      `http://localhost:3001/deserts`,
    )
    .then(({ data }) => {
      dispatch(setDesert(data));
    });
};

export const setDesert = (desertItems) => ({
  type: 'SET_DESERTS',
  payload: desertItems,
});