
const ReactDOMServer = require('react-dom/server');
const React = require('react')
const ReactDOM = require('react-dom');

var vnode = React.createElement("style", {
  type: "text/style"
}, `
  .container::before {
    content: "",
    width: 0,
    height: 0
  }`);
console.log(ReactDOMServer.renderToString(vnode));
console.log(vnode)