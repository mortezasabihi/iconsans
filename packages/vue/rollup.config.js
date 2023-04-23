import resolve from "@rollup/plugin-node-resolve";
import filesize from "rollup-plugin-filesize";
import typescript from "@rollup/plugin-typescript";
import vue from "rollup-plugin-vue";

const packageJson = require("./package.json");

export default {
  input: `./index.ts`,
  output: [
    {
      file: packageJson.main,
      format: "cjs",
    },
    {
      file: packageJson.module,
      format: "esm",
    },
  ],
  plugins: [
    resolve(),
    vue(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    filesize(),
  ],
  external: ["vue"],
};
