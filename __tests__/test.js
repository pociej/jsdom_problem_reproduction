const { JSDOM } = require("jsdom");

describe("suit", () => {
  test("test", () => {
    JSDOM.fromURL("https://example.com", {}).then(dom => {
      expect(1).toBe(1);
    });
  });
});
