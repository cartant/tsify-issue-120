"use strict";
let out = require("./bundle");
console.log(Object.keys(out));
if (out.c) { out.c(); }