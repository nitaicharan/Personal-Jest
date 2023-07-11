import { fromNullable, none, some } from "fp-ts/Option";

describe("Option", () => {
  describe("fromNullable", () => {
    it("should return `Some<Value>` in case not `null` or `undefined` a value", () => {
      const option = fromNullable(0);

      expect(option).toStrictEqual(some(0));
    });

    it("should return the `None` in case passing a `undefined` or `null`", () => {
      const nullOpt = fromNullable(null);
      const undefinedOpt = fromNullable(undefined);

      expect(nullOpt).toStrictEqual(none);
      expect(undefinedOpt).toStrictEqual(none);
    });
  });
});
