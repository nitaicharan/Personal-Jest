import { none, some, tryCatch } from "fp-ts/Option";

describe("Option", () => {
  describe("tryCatch", () => {
    it("should return `Some<value>` when param function dosen't throw a error", () => {
      const option = tryCatch(() => 0);

      expect(option).toStrictEqual(some(0));
    });

    it("should return `None` when param function throw a error", () => {
      const option = tryCatch(() => {
        throw new Error("");
      });

      expect(option).toStrictEqual(none);
    });
  });
});
