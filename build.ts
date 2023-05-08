const { build } = require("esbuild");

build({
  bundle: true,
  entryPoints: ["src/index.ts"],
  minify: false,
  sourcemap: false,
  format: "esm",
  outfile: "./dist/index.js",
  target: ["ESNext"],
});
