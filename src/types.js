// @flow
declare type Movie = {
  id: number,
  title: string,
  vote_average: number,
  release_date: string,
  backdrop_path?: string,
  poster_path?: string,
  overview: string
};

declare type InputEvent = Event & { target: HTMLInputEvent };
