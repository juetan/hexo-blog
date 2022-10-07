const postcss = require("postcss");
const _tailwindcss = require("tailwindcss");

const tailwindcss = _tailwindcss({ content: ["./**/*.{html,ejs}"] });

const renderer = (data) => {
  return postcss([tailwindcss])
    .process(data.text)
    .then((result) => result.css);
};

hexo.extend.renderer.register("css", "css", renderer);
