// .vuepress/config.js
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
module.exports = {
    plugins: [
      [
        "md-enhance",
        {
          codetabs: true,
        },
      ],
    ],
  };
  