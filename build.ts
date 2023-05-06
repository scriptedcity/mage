const { build } = require("esbuild");

const entryFile = "src/index.ts";
const shared = {
  bundle: true,
  entryPoints: [entryFile],
  minify: true,
  sourcemap: false,
};

build({
  ...shared,
  format: "esm",
  outfile: "./index.esm.js",
  target: ["ESNext"],
});

build({
  ...shared,
  format: "cjs",
  outfile: "./index.cjs.js",
  target: ["ESNext"],
});
