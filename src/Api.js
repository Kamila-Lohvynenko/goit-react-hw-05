import axios from 'axios';

const key =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDI4NjBlMzljZmQxYzAyYWE1YzI1MmJiMDAzZDQ2OCIsInN1YiI6IjY2NWYyOGIyMDc2Y2VlYjE2NTIzNGE5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QmMinzxdaQ058nLj5Yo1cHaVFFFV6-r0YxRzN0KRmr4';

const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${key}`;

export async function fetchTrendyMovies() {
  const response = await axios.get('/trending/movie/week');
  return response.data;
}

export async function fetchMoviesBySearch(query, page) {
  const response = await axios.get(`/search/movie?query=${query}&page=${page}`);
  return response.data;
}
export async function fetchMovieById(id) {
  const response = await axios.get(`/movie/${id}`);

  return response.data;
}
export async function fetchMovieCredits(id) {
  const response = await axios.get(`/movie/${id}/credits`);
  return response.data;
}

export async function fetchMovieReviews(id) {
  const response = await axios.get(`/movie/${id}/reviews`);
  return response.data;
}
