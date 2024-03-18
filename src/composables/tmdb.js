import axios from "axios";

const apiKey = "663fceec1774a832f7431b89d1d2d580";

const options = {
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    Authorization: "Bearer 663fceec1774a832f7431b89d1d2d580",
  },
};

async function fetchData(pageNumber = 1) {
  try {
    let foundHighRatingTV = false;
    let foundHighRatingMovie = false;
    let tvResults = [];
    let movieResults = [];
    let highRatingTVResults = [];
    let highRatingMovieResults = [];

    while (!foundHighRatingTV) {
      const tvUrl = `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${pageNumber}&api_key=${apiKey}`;
      const tvResponse = await axios.get(tvUrl, options);
      tvResults = tvResults.concat(tvResponse.data.results);
      const highRatingTV = tvResponse.data.results.filter(
        (result) => result.vote_average >= 8
      );
      if (highRatingTV.length > 0) {
        highRatingTVResults = highRatingTVResults.concat(highRatingTV);
        foundHighRatingTV = true;
      } else {
        pageNumber++;
      }
    }

    pageNumber = 1;

    while (!foundHighRatingMovie) {
      const movieUrl = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNumber}&api_key=${apiKey}`;
      const movieResponse = await axios.get(movieUrl, options);
      movieResults = movieResults.concat(movieResponse.data.results);
      const highRatingMovie = movieResponse.data.results.filter(
        (result) => result.vote_average >= 8
      );
      if (highRatingMovie.length > 0) {
        highRatingMovieResults = highRatingMovieResults.concat(highRatingMovie);
        foundHighRatingMovie = true;
      } else {
        pageNumber++;
      }
    }

    return {
      tv: { allResults: tvResults, highRatingResults: highRatingTVResults },
      movie: {
        allResults: movieResults,
        highRatingResults: highRatingMovieResults,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}


const fetchCasting = async (movieId, contentType) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${contentType}/${movieId}/credits?language=en-US&api_key=${apiKey}`
    );
    // console.log(response.data);

    return response.data.cast;
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
};

const fetchMovieDetails = async (movieId, contentType) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${contentType}/${movieId}`,
      {
        params: {
          api_key: apiKey,
          language: "en-US",
        },
      }
    );
    // console.log(response.data)
        return response.data;

  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
};
export { fetchData, fetchMovieDetails, fetchCasting };

//name
//poster
//description
//release date
//genres
//production company
//rating
//cast images
