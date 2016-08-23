"use strict";

const browserify = require("browserify");

browserify({
    entries: "c.ts",
    standalone: "test"
}).plugin("tsify", {
    module: "commonjs",
    moduleResolution: "node"
})
.bundle()
.pipe(process.stdout);