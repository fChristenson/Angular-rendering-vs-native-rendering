const { Component } = require("angular");

console.time();
var app = new Vue({
  el: "#root",
  data: {
    items: ["foo", "bar", "baz"]
  }
});
console.timeEnd();
