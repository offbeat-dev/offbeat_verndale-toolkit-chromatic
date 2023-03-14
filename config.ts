export default {
  // Public path
  // if set, make sure it ends with /
  // e.g. 'assets/'
  publicPath: '',

  // Directory names
  get dir() {
    return {
      source: 'src',
      production: 'dist',

      assets: {
        html: 'html',
        scripts: 'scripts',
        scss: 'scss',
        static: 'static',
        svgSprites: 'svg-sprites',
        stories: 'stories',
        htmlTemplates: 'templates',
        htmlModules: 'modules',
        htmlComonents: 'components'
      },

      // Asset paths
      get paths() {
        return {
          // source
          //srcStatic: `${this.source}/${this.assets.static}`,
          srcScripts: `${this.source}/${this.assets.scripts}`,
          srcStyles: `${this.source}/${this.assets.scss}`,
          srcHtml: `${this.source}/${this.assets.html}`,
          srcSvgSprites: `${this.source}/${this.assets.static}/${this.assets.svgSprites}`,
          srcStories: `${this.source}/${this.assets.stories}`,

          // scaffold
          srcTemplates: `${this.source}/${this.assets.html}/${this.assets.htmlTemplates}`,
          storyTemplates: `${this.source}/${this.assets.stories}/${this.assets.htmlTemplates}`,
          srcModules: `${this.source}/${this.assets.html}/${this.assets.htmlModules}`,
          storyModules: `${this.source}/${this.assets.stories}/${this.assets.htmlModules}`,
          srcComponents: `${this.source}/${this.assets.html}/${this.assets.htmlComonents}`,
          storyComponents: `${this.source}/${this.assets.stories}/${this.assets.htmlComonents}`
        };
      }
    };
  }
};
