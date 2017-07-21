import { excerptify } from "./strings";

describe("excerptify", () => {
  it("should return it's input if it's input is <= to it's cutoff", () => {
    const inputs = [
      "This string is equal to 37 characters",
      "This string is less than 37 chars"
    ];

    const makeExcerpt = excerptify(inputs[0].length);

    inputs.forEach(input => {
      expect(makeExcerpt(input)).toEqual(input);
    });
  });

  it("should return the first sentence found if input is longer than cutoff", () => {
    const input = "This string is longer than 37 characters. Foobar.";
    const expected = "This string is longer than 37 characters.";

    const makeExcerpt = excerptify(42);

    expect(makeExcerpt(input)).toEqual(expected);
  });

  it("should truncate the string and add an ellipsis if first sentence is longer than cutoff", () => {
    const input = "This sentence is longer than the 42 character cutoff. Foo.";
    const expected = "This sentence is longer than the 42 charac…";

    const makeExcerpt = excerptify(42);

    expect(makeExcerpt(input)).toEqual(expected);
  });
});
