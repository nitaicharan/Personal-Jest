import { last } from "fp-ts/Array";
import { none, some } from "fp-ts/Option";

describe("Array", () => {
  describe("last", () => {
    it("should return last elament when it's not empity", () => {
      const lastOpt = last([1, 2, 3]);

      expect(lastOpt).toStrictEqual(some(3));
    });

    it("should return `None` when the argment is a empity list", () => {
      const lastOpt = last([]);

      expect(lastOpt).toStrictEqual(none);
    });
  });
});
