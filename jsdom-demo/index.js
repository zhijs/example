const jsdom = require("jsdom");
const { JSDOM } = jsdom;

JSDOM.fromFile('./index.html').then(dom => {
  dom.window.document.title = '22222'
  console.log(dom.serialize());
});