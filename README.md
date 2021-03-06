# Moovies

> Playing with the Movie DB API

## Preview

You can see a preview of this project here:

[http://btn-moovies.netlify.com/](http://btn-moovies.netlify.com/)

## Getting Started

Copy `example.env` to `.env` and update the `REACT_APP_MOVIE_DB_AP_KEY` to use your own
Movie DB API key.

```
$ cp example.env .env
```

Because this project was bootstrapped by [`create-react-app`](https://github.com/facebookincubator/create-react-app), you can boot up the app by running:

```
$ yarn start
```

## Running Tests

Tests are supported via Jest:

```
$ yarn test
```

## Building for Production

Running `yarn build` will build a production ready deploy to the `build`
folder.

## Todo

All data is currently requested directly from the Movies DB API. To cut down on
API requests I would probably implement a localstorage persistence layer. This
is super easy to do with
[`redux-persist`](https://github.com/rt2zz/redux-persist). Which would in turn
require a Redux implementation, which could also be used as an in-memory cache.

- Update the Page title via React-Helmet…
- Implement Redux.
- Implement Redux-Persist.
- Integration testing via Nightmare?

Search bar is currently only on the Index, would be nice to incorporate this
onto the MovieDetail page.

- SearchBar on MovieDetail page.

`lib/Movies` is in a somewhat messy state, there's probably some room to
refactor this. Actually, this would probably be replaced by a Redux
implementation anyway.

There's a strange bug with back button history on the MovieDetail page. Look into and
fix this.

## Supported Browsers

Because this is a technical demo I will be using `display: grid`. The app should
render correctly in most evergreen browsers.

In case you're wondering about my experience with cross-browser CSS: I've 
debugged IE11 layout bugs remotely through screenshots.
