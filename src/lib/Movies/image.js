const HTTPS_ENABLED =
  process.env.REACT_APP_HTTPS_ENABLED.toLowerCase() === "true";

const PROTOCOL = HTTPS_ENABLED ? "https://" : "http://";

const BASE_IMAGE_URL = "image.tmdb.org/t/p/";

export default (src, size) => `${PROTOCOL}${BASE_IMAGE_URL}${size}/${src}`;
