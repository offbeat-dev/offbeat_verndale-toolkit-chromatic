const vitePluginCustomHmr = () => {
  return {
    name: 'vite-plugin-custom-hmr',
    enforce: 'post',
    handleHotUpdate({ file, server }) {
      if (file.endsWith('.hbs')) {
        server.ws.send({
          type: 'full-reload'
        });
      }
    }
  };
};

export default vitePluginCustomHmr;
