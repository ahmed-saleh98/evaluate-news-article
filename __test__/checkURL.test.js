import { checkURL } from "../src/client/js/checkURL";

describe("Testing CheckURL Functionality", () => {
  test("Testing the checkURL function defined or not", () => {
    expect(checkURL).toBeDefined();
  });

  test("Testing the checkURL function to return true", () => {
    expect(checkURL).toBeTruthy();
  });
});
