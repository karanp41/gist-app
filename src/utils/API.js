import axios from 'axios';

export const baseURL = `${
  window.location.hostname === 'localhost'
    ? 'https://api.github.com'
    : window.location.origin
}`;

export const API = axios.create({
  baseURL: `${baseURL}/`,
});

export const handleRequestError = error => {
  const genericError = 'Generic error happened';
  if(!error) return genericError;

  if(error.response && error.response.data) {
    return error.response.data.errorMessage || error.message || genericError;
  }

  if(error.message) return error.message;

  return genericError;
};

export const extractDataObject = (data, defaultValue) =>  data && data.data ? data.data : defaultValue || {};
