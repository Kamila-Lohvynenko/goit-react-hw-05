import axios from 'axios';

// const key =
//   'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDI4NjBlMzljZmQxYzAyYWE1YzI1MmJiMDAzZDQ2OCIsInN1YiI6IjY2NWYyOGIyMDc2Y2VlYjE2NTIzNGE5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QmMinzxdaQ058nLj5Yo1cHaVFFFV6-r0YxRzN0KRmr4';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDI4NjBlMzljZmQxYzAyYWE1YzI1MmJiMDAzZDQ2OCIsInN1YiI6IjY2NWYyOGIyMDc2Y2VlYjE2NTIzNGE5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QmMinzxdaQ058nLj5Yo1cHaVFFFV6-r0YxRzN0KRmr4',
  },
};
export async function fetchTrendyMovies() {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/week',
    options
  );
  return response.data;
}

export async function fetchMoviesBySearch(query, page) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}`,
    options
  );
  return response.data;
}
