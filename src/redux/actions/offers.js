import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchOffers = (sortBy, category) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });
  axios
    .get(
      `/offers`,
    )
    .then(({ data }) => {
      dispatch(setOffers(data));
    });
};

export const setOffers = (offersItems) => ({
  type: 'SET_OFFERS',
  payload: offersItems,
});