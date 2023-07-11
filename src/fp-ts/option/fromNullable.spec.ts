import { fromNullable, none, some } from "fp-ts/Option";

describe("Option", () => {
  describe("fromNullable", () => {
    it("should return `Some<Value>` in case not `null` or `undefined` a value", () => {
      expect(fromNullable(0)).toStrictEqual(some(0));
    });

    it("should return the `None` in case passing a `undefined` or `null`", () => {
      expect(fromNullable(undefined)).toStrictEqual(none);
      expect(fromNullable(null)).toStrictEqual(none);
    });
  });
});
