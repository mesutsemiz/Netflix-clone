export const getMoviesStart = () => ({
    type: "GET_MOVIES_START",
  });
  
  export const getMoviesSuccess = (movies) => ({
    type: "GET_MOVIES_SUCCESS",
    payload: movies,
  });
  
  export const getMoviesFailure = () => ({
    type: "GET_MOVIES_FAILURE",
  });
export const createMovieStart = () => ({
    type: "CREATE_MOVIE_START",
  });
  
  export const createMovieSuccess = (movie) => ({
    type: "GECREATEOVIES_UCCESS",
    payload: movie,
  });
  
  export const createMovieFailure = () => ({
    type: "GECREATEOVIES_AILURE",
  });

export const deleteMovieStart = ()=>({
    type : "DELETE_MOVIE_START",
})

export const deleteMovieSuccess = ()=>({
    type : "DELETE_MOVIE_SUCCESS",
});

export const deleteMovieFailure = () =>({
    type : "DELETE_MOVIE_FAILURE",
});
