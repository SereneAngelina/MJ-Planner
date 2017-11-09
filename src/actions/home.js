import axios from 'axios';

//Post list
export const FETCH_PLANS = 'FETCH_PLANS';
export const FETCH_PLANS_SUCCESS = 'FETCH_PLANS_SUCCESS';
export const FETCH_PLANS_FAILURE = 'FETCH_PLANS_FAILURE';
export const RESET_PLANS = 'RESET_PLANS';

const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';
export function fetchPlans() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/plans`,
    headers: []
  });

  return {
    type: FETCH_PLANS,
    payload: request
  };
}

export function fetchPlansSuccess(PLANS) {
  return {
    type: FETCH_PLANS_SUCCESS,
    payload: PLANS
  };
}

export function fetchPlansFailure(error) {
  return {
    type: FETCH_PLANS_FAILURE,
    payload: error
  };
}
