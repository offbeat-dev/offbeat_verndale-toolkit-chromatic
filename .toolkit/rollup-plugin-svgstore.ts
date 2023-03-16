import fs from 'fs-extra';
import { resolve, parse, join } from 'path';
import svgstore from 'svgstore';
import picomatch from 'picomatch';
import { type ViteDevServer } from 'vite';

const rollupPluginSvgStore = (
  options: { inputFolder?: string; output?: string; inline?: boolean } = {}
) => {
  const inputFolder = options.inputFolder || 'src/icons';
  const output = options.output || 'dist/bundle.svg';

  const generateSvgSheet = () => {
    const sprites = svgstore(options);
    const icons_dir = resolve(inputFolder);
    for (const file of fs.readdirSync(icons_dir)) {
      const filepath = join(icons_dir, file);
      const svgid = parse(file).name;
      let code = fs.readFileSync(filepath, { encoding: 'utf-8' });
      sprites.add(svgid, code);
    }
    fs.ensureFileSync(resolve(output));
    fs.writeFileSync(
      resolve(output),
      sprites.toString({ inline: !!options.inline })
    );
  };

  return {
    name: 'rollup-plugin-svgstore',
    config: () => ({ server: { watch: { disableGlobbing: false } } }),
    configureServer({ watcher }: ViteDevServer) {
      generateSvgSheet(); //generate svgsheet on startup

      const files = resolve(inputFolder, '**/*.svg');
      const shouldReload = picomatch(files);
      const checkGenerateSVG = async (path: string) => {
        if (shouldReload)
          if (!!shouldReload && shouldReload(path)) {
            generateSvgSheet(); //generate svgsheet on file add, change or remove
          }
      };
      watcher.add(files);
      watcher.on('add', checkGenerateSVG);
      watcher.on('change', checkGenerateSVG);
      watcher.on('unlink', checkGenerateSVG);
    },
    generateBundle: async () => {
      generateSvgSheet();
    }
  };
};

export default rollupPluginSvgStore;
