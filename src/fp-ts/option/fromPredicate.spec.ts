import { fromPredicate, none, of, some } from "fp-ts/Option";

describe("Option", () => {
  describe("fromPredicate", () => {
    it("should `Some<value>` when predicate return true", () => {
      const test = fromPredicate((s: string) => true);

      expect(test("")).toStrictEqual(some(""));
    });

    it("should `None` when predicate return true", () => {
      const test = fromPredicate((s: string) => false);

      expect(test("")).toStrictEqual(none);
    });
  });
});
