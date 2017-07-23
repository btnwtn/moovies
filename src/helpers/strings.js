// @flow
import { compose } from "recompose";
import slug from "slug";

export const slugify = (str: string) => slug(str.toLowerCase());

export const excerptify = (cutoff: number) => (str: string) => {
  if (str.length <= cutoff) return str;

  const split = by => str => str.split(by);
  const length = str => str.length;
  const head = a => a[0];
  const join = a => a.join("");

  const firstSentence = compose(head, split("."));
  
  const sentence = firstSentence(str);

  if (length(sentence) <= cutoff) {
    return join([sentence, "."]);
  }

  const sliceAtCutoff = (str: string) => str.slice(0, cutoff);

  const trimWithEllipsis = (str: string) => `${str.trim()}…`;

  const enhance = compose(trimWithEllipsis, sliceAtCutoff);

  return enhance(str);
};
