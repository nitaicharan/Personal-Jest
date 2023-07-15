import { of, map } from "fp-ts/Option";

describe("Option", () => {
  describe("map", () => {
    it("should transform from `Object<value>` to Object<2*value>", () => {
      const dobler = map<number, number>((value) => 2 * value);
      const valueOpt = of(2);

      expect(dobler(valueOpt)).toStrictEqual(of(4));
    });
  });
});
