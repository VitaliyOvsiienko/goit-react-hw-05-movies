import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '9f483b2fd7e828c71a7a1dd0e1411689';

const moviesApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const fetchTrendingMovies = async () => {
  const { data } = await moviesApi.get('/trending/movie/day');
  return data;
};

export const searchMovies = async query => {
  const { data } = await moviesApi.get('search/movie', {
    params: {
      page: 1,
      include_adult: false,
      query,
    },
  });
  return data;
};

export const fetchMoviesDetails = async id => {
  const { data } = await moviesApi.get(`movie/${id}`);
  return data;
};

export const fetchMoviesActors = async id => {
  const { data } = await moviesApi.get(`movie/${id}/credits`);
  return data;
};

export const fetchMoviesReviews = async id => {
  const { data } = await moviesApi.get(`movie/${id}/reviews`);
  return data;
};
