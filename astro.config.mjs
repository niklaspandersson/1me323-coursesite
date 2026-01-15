import { defineConfig } from "astro/config";
import { join } from "node:path";
import rehypeUrls from "rehype-urls";
import mdx from "@astrojs/mdx";

const BASE_URL = "/wt3/";

const addBaseUrl = (url) => {
  if (url.path.startsWith("/img")) {
    return join(BASE_URL, url.path);
  }
  return url;
};

// https://astro.build/config
export default defineConfig({
  site: "https://medieteknik.lnu.se" + BASE_URL,
  base: BASE_URL,
  markdown: {
    shikiConfig: {
      theme: "min-light",
    },
  },
  trailingSlash: "always",
  integrations: [
    mdx({
      rehypePlugins: [[rehypeUrls, addBaseUrl]],
    }),
  ],
});
