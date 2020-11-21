import axios from 'axios';

export const fetchPopularOne = (sortBy, category) => (dispatch) => {
  axios
    .get(
      `/popularone`,
    )
    .then(({ data }) => {
      dispatch(setPopularOne(data));
    });
};

export const setPopularOne = (popItemsOne) => ({
  type: 'SET_POPULARONE',
  payload: popItemsOne,
});

export const fetchPopularTwo = (sortBy, category) => (dispatch) => {
  axios
    .get(
      `/populartwo`,
    )
    .then(({ data }) => {
      dispatch(setPopularTwo(data));
    });
};

export const setPopularTwo = (popItemsTwo) => ({
  type: 'SET_POPULARTWO',
  payload: popItemsTwo,
});