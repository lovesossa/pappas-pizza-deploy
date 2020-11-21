import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchSause = (sortBy, category) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });
  axios
    .get(
      `/addsause`,
    )
    .then(({ data }) => {
      dispatch(setSause(data));
    });
};

export const setSause = (sauseItems) => ({
  type: 'SET_SAUSE',
  payload: sauseItems,
});