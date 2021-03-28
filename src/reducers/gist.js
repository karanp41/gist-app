import { SET_GIST, INIT_GIST } from '../actions';

export const gistInitialState = [];

export const gistReducer = (state, action) => {
  switch (action.type) {
    case SET_GIST:
      return { gists: action.payload };
    case INIT_GIST:
      return { gists: gistInitialState };
    default:
      throw new Error('Unexpected action');
  }
};