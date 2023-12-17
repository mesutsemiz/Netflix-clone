import {
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
} from "./MovieActions";

export const getMovies = (dispatch) => {
  dispatch(getMoviesStart());

  try {
    const res = axios.get("/movies", {
      headers: {
        token: "Bearer" + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getMoviesSuccess());
  } catch (error) {
    dispatch(getMoviesFailure());
  }
};
