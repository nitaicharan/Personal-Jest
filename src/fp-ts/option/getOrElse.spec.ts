import { getOrElse, none, some } from "fp-ts/Option";

describe("Option", () => {
  describe("getOrElse", () => {
    it("should return `value` when param is a Soma<typeof value>", () => {
      const optionFn = getOrElse(() => 0);

      expect(optionFn(some(1))).toStrictEqual(1);
    });

    it("should return the callback response when param is a `None`", () => {
      const optionFn = getOrElse(() => 0);

      expect(optionFn(none)).toStrictEqual(0);
    });
  });
});
