import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_Y1Tb3cUbGeQnIj70jlBvHw8xWhLglrg79lhCUbBtIoO1JtbScwaNSvf6syZybDXY';

const url = 'https://api.thecatapi.com/v1/breeds';

export function fetchBreeds() {
  return axios(url).then(response => {
    return response.data;
  });
}

export function fetchCatByBreed(breedId) {
  return axios(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
  ).then(response => {
    return response;
  });
}
