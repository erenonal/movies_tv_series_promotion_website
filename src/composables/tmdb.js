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

export { fetchData };


// Veriyi cagirdigin yerde idisini alip buna gonder oyle casting gelsin
export function fetchCasting() {
  const url = `https://api.themoviedb.org/3/tv/94722/aggregate_credits?language=en-US&api_key=${apiKey}`;
  return axios.get(url, options);
}

// Example usage:
(async () => {
  try {
    const { movie } = await fetchData();
  } catch (error) {
    console.error("Error:", error);
  }
})();

//name
//poster
//description
//release date
//genres
//production company
//rating
//cast images

//original_name
//poster_path
//first_air_date
//genre_ids

//vote_average

//id
