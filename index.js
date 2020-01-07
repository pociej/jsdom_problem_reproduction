const { JSDOM } = require("jsdom");
JSDOM.fromURL("https://example.com/", {}).then(dom => {
  console.log(dom.serialize());
});
