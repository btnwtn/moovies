// @flow
import qs from "qs";
import * as config from "./config";
import image from "./image";

const toJSON = response => response.json();

const checkStatus = async response => {
  if (response.status < 200 || response.status >= 300) {
    throw await toJSON(response);
  }

  return response;
};

const buildUrl = (endpoint, options = {}) => {
  const API_URL =
    process.env.NODE_ENV === "development" ? "" : "https://api.themoviedb.org";

  const params = qs.stringify({
    api_key: process.env.REACT_APP_MOVIE_DB_AP_KEY,
    ...options
  });

  return `${API_URL}${endpoint}?${params}`;
};

const Api = {
  get(endpoint, options = {}) {
    return new Promise((resolve, reject) =>
      fetch(buildUrl(endpoint, options))
        .then(checkStatus)
        .then(toJSON)
        .then(resolve)
        .catch(reject)
    );
  }
};

const getPopular = () => Api.get("/3/movie/popular");

const search = (query: string, options: {} = {}) =>
  Api.get("/3/search/movie", { query, ...options, include_adult: false });

const getDetails = (movieId: number, options: {} = {}) =>
  Api.get(`/3/movie/${movieId}`, options);

const getVideos = (movieId: number, options: {} = {}) =>
  Api.get(`/3/movie/${movieId}/videos`, options);

const getRecommendations = (movieId: number, options: {} = {}) =>
  Api.get(`/3/movie/${movieId}/recommendations`, options);

export const PosterSizes = config.PosterSizes;
export const BackdropSizes = config.BackdropSizes;

export default {
  getPopular,
  getDetails,
  getVideos,
  getRecommendations,
  image,
  search
};
