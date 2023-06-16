"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Title = require("./components/Title/Title");
Object.keys(_Title).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Title[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Title[key];
    }
  });
});