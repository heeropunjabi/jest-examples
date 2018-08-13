jest.mock("request");

import * as user from "./users";

// The assertion for a promise must be returned.
test("should ", () => {
  expect.assertions(1);
  return expect(user.getUserName(3)).rejects.toEqual({
    error: "User with 3 not found."
  });
});
it("works with async/await", async () => {
  expect.assertions(1);
  const data = await user.getUserName(4);
  expect(data).toEqual("Mark");
});
