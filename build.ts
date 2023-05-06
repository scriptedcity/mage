import { build } from "esbuild";

const entryFile = "src/index.ts";
const option = {
  bundle: true,
  entryPoints: [entryFile],
  minify: false,
  sourcemap: false,
};

build({
  ...option,
  format: "esm",
  outfile: "./dist/index.esm.js",
  target: ["ESNext"],
});

build({
  ...option,
  format: "cjs",
  outfile: "./dist/index.cjs.js",
  target: ["ESNext"],
});
