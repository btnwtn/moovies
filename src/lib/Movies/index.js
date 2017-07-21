import qs from "qs";
import * as config from "./config";

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

export const PosterSizes = config.PosterSizes;
export const BackdropSizes = config.BackdropSizes;

const HTTPS_ENABLED =
  process.env.REACT_APP_HTTPS_ENABLED.toLowerCase() === "true";

const PROTOCOL = HTTPS_ENABLED ? "https://" : "http://";

const BASE_IMAGE_URL = "image.tmdb.org/t/p/";

export default {
  getPopular: () => Api.get("/3/movie/popular"),
  image: (src, size) => `${PROTOCOL}${BASE_IMAGE_URL}${size}/${src}`
};
