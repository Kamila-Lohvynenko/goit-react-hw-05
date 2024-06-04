import axios from 'axios';

// const key =
//   'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDI4NjBlMzljZmQxYzAyYWE1YzI1MmJiMDAzZDQ2OCIsInN1YiI6IjY2NWYyOGIyMDc2Y2VlYjE2NTIzNGE5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QmMinzxdaQ058nLj5Yo1cHaVFFFV6-r0YxRzN0KRmr4';
const url = 'https://api.themoviedb.org/3/trending/movie/day';
const options = {
  headers: {
    // Замість api_read_access_token вставте свій токен
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDI4NjBlMzljZmQxYzAyYWE1YzI1MmJiMDAzZDQ2OCIsInN1YiI6IjY2NWYyOGIyMDc2Y2VlYjE2NTIzNGE5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QmMinzxdaQ058nLj5Yo1cHaVFFFV6-r0YxRzN0KRmr4',
  },
};
async function fetchMovies() {
  const response = await axios.get(url, options);
  return response.data;
}
export default fetchMovies;
