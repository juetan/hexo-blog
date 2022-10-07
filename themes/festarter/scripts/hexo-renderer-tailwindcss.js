const postcss = require("postcss");
const _tailwindcss = require("tailwindcss");

const tailwindcss = _tailwindcss({ content: ["./**/*.{html,ejs}"] });

const renderer = (data) => {
  return postcss([tailwindcss])
    .process(data.text)
    .then((result) => result.css);
};

hexo.extend.helper.register('basePath', (path) => {
  const isDev = hexo.env.cmd === 'server'
  return isDev ? `/${path}` : hexo.theme.config.basePath + path
})

hexo.extend.renderer.register("css", "css", renderer);
