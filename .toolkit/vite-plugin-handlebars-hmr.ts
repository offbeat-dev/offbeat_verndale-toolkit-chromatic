const vitePluginHandlebarsHmr = () => {
  return {
    name: 'vite-plugin-handlebars-hmr',
    apply: 'serve',
    handleHotUpdate({ file, server }) {
      if (file.endsWith('.hbs')) {
        setTimeout(() => {
          server.ws.send({
            type: 'full-reload'
          });
        }, 200);
      }
    }
  };
};

export default vitePluginHandlebarsHmr;
