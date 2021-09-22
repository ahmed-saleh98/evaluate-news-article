import "babel-polyfill";
import { handleSubmit } from "../src/client/js/formHandler";

describe("Testing handleSubmit Functionality", () => {
  test("Testing the handleSubmit function defined or not", () => {
    expect(handleSubmit).toBeDefined();
  });
});
