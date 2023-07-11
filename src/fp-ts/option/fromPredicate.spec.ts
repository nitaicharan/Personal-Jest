import { fromPredicate, none, of, some } from "fp-ts/Option";

describe("Option", () => {
  describe("fromPredicate", () => {
    it("should return `Some<value>` when predicate return true", () => {
      const optFn = fromPredicate((s: string) => true);

      expect(optFn("")).toStrictEqual(some(""));
    });

    it("should return `None` when predicate return false", () => {
      const optFn = fromPredicate((s: string) => false);

      expect(optFn("")).toStrictEqual(none);
    });
  });
});
