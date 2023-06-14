describe("outer", () => {
  describe("describe inner 1", () => {
    test("test 1", () => {
      expect(true).toEqual(true);
    });
  });

  test("test 1", () => {
    expect(true).toEqual(true);
  });

  describe("describe inner 2", () => {
    test("test for describe inner 2", () => {
      expect(false).toEqual(false);
    });
  });
});

// describe outer-a
// describe inner 1
// describe outer-b
// describe inner 2
// describe outer-c
// test for describe inner 1
// test for describe outer
// test for describe inner 2
