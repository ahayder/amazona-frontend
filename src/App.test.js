describe("This is perform some fake tests", () => {
  it("should perform a fake truthy test", () => {
    expect(true).toBeTruthy();
  })
  it("should perform a fake falsy test", () => {
    expect(false).toBeFalsy();
  })
  it("should be a number 5", () => {
    expect(5).toEqual(5);
  })
})

describe("Againi this will perform some fake tests", () => {
  it("should be null", () => {
    expect(null).toBeNull();
  })
})