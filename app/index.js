var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
var Badge = require('./components/Badge');
require('./index.css');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);


ReactDOM.render(
  <Badge
    name="Aaron"
    username="aaronkim5"
    img="https://avatars3.githubusercontent.com/u/16812330?v=3&u=51fa999bca1eb2561d21133280187e46bb386aad&s=400"
  />,
  document.getElementById('badge')
);
