const preactRenderToString = require('preact-render-to-string')
const preact = require('preact')

var vnode = preact.h(
  "style", {
    type: "text/style",
    dangerouslySetInnerHTML: {
      __html: `
    .container::before {
      content: "",
      width: 0,
      height: 0
    }`
    }
  });
console.log(preactRenderToString(vnode));
console.log(vnode)
