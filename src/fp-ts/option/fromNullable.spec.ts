import { option as O } from "fp-ts";

describe("Option", () => {
  describe("fromNullable", () => {
    it("should return the values in case passing a value", () => {
      expect(O.fromNullable(0)).toStrictEqual(O.of(0));
    });

    it("should return the `none` in case passing a `undefined`", () => {
      expect(O.fromNullable(undefined)).toStrictEqual(O.none);
    });

    it("should return the `none` in case passing a `null`", () => {
      expect(O.fromNullable(null)).toStrictEqual(O.none);
    });
  });
});
