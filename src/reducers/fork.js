import { SET_FORK, INIT_FORK } from '../actions';

export const forkInitialState = [];

export const forkReducer = (state, action) => {
  switch (action.type) {
    case SET_FORK:
      return { forks: action.payload };
    case INIT_FORK:
      return { forks: forkInitialState };
    default:
      throw new Error('Unexpected action');
  }
};