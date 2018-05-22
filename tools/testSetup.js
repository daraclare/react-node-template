/* eslint-disable no-var*/

process.env.NODE_ENV = "test";

require("babel-register")();

require.extensions[".css"] = function() {
  return null;
};
require.extensions[".scss"] = function() {
  return null;
};
require.extensions[".png"] = function() {
  return null;
};
require.extensions[".jpg"] = function() {
  return null;
};
require.extensions[".jpeg"] = function() {
  return null;
};
require.extensions[".gif"] = function() {
  return null;
};
require.extensions[".svg"] = function() {
  return null;
};

var jsdom = require("jsdom").jsdom;

var exposedProperties = ["window", "navigator", "document"];

global.document = jsdom("");
global.window = document.defaultView;
Object.keys(document.defaultView).forEach(property => {
  if (typeof global[property] === "undefined") {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: "node.js"
};
