import Sum from "./sum";

describe("#sum", () => {
  it("returns 0 with no numbers", () => {
    expect(Sum()).toBe(0);
  });

  it("returns same number with one number", () => {
    expect(Sum(2)).toBe(2);
  });

  it("returns sum with multiple numbers", () => {
    expect(Sum(1, 2, 3)).toBe(6);
  });
});