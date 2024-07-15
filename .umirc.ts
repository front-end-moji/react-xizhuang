import { defineConfig } from "umi";

export default defineConfig({
  routes: [{ path: "/", component: "index" }],
  npmClient: "pnpm",
  base: process.env.NODE_ENV === "production" ? "./" : "/",
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  hash: false,
  codeSplitting: { jsStrategy: "bigVendors" },
  extraBabelPlugins:
    process.env.NODE_ENV === "production"
      ? ["babel-plugin-dynamic-import-node"]
      : [],
});
