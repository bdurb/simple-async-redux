import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

export const getChars = chars => {
  const promise = axios.get('https://swapi.co/api/people');
  return dispatch => {
    dispatch({ type: FETCHING });
    promise
      .then(({ data }) => {
        dispatch({ type: FETCHED , payload: data.results })
      })
      .catch( err => {
        dispatch({ type: ERROR, payload: err});
      });
  };
};