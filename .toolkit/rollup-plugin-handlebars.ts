import Handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';

const INTERNAL_INIT_ID = '\0handlebarsPluginInit';
const escapePath = path => path.replace(/\\/g, '\\\\');

type RollupPluginHandlebarsOptions = {
  helpersDirs?: string | string[];
  partialsDirs?: string | string[];
};

const rollupPluginHandlebars = (options?: RollupPluginHandlebarsOptions) => {
  const hbsImport = `import Handlebars from 'handlebars';\n`;

  return {
    name: 'rollup-plugin-handlebars',

    resolveId: (id: string) => (id === INTERNAL_INIT_ID ? id : undefined),

    load(id: string) {
      if (id !== INTERNAL_INIT_ID) return;

      let body = hbsImport,
        helpersExp = '',
        partialsExp = '';

      // Load Helpers
      if (options?.helpersDirs) {
        const helpersDirs = Array.isArray(options.helpersDirs)
          ? options.helpersDirs
          : [options.helpersDirs];

        helpersExp = helpersDirs
          .map((dir, i) => {
            return fs
              .readdirSync(dir)
              .map((helper, j) => {
                const name = helper.replace('.js', '');
                body += `import Helper${i}${j} from '${escapePath(
                  `${dir}/${helper}`
                )}';\n`;
                return ` Helper${i}${j}.__registered || (Handlebars.registerHelper('${name}',  Helper${i}${j}),  Helper${i}${j}.__registered = true);\n`;
              })
              .join('');
          })
          .join('');
      }

      // Load Partials
      if (options?.partialsDirs) {
        const partialsDirs = Array.isArray(options.partialsDirs)
          ? options.partialsDirs
          : [options.partialsDirs];

        partialsExp = partialsDirs
          .map((dir, i) => {
            return fs
              .readdirSync(dir)
              .map((partial, j) => {
                if (!partial.endsWith('.hbs')) return;
                const name = partial.replace('.hbs', '');
                body += `import Partial${i}${j} from '${escapePath(
                  `${dir}/${partial}?raw`
                )}';\n`;
                return `'${name}' in Handlebars.partials || Handlebars.registerPartial('${name}', Partial${i}${j});\n`;
              })
              .join('');
          })
          .join('');
      }

      body += `export default function() {\n${helpersExp}\n${partialsExp}}\n`;

      return { code: body, map: { mappings: '' } };
    },

    transform(src: string, id: string) {
      if (!/\.hbs$/.test(id)) return;

      const tree = Handlebars.parse(src);
      const template: TemplateSpecification = Handlebars.precompile(tree);

      let body = hbsImport;
      body += `import init from '${INTERNAL_INIT_ID}';\n`;
      body += `init();\n`;
      body += `var Template = Handlebars.template(${template});\n`;
      // body += `console.log('-- HELPERS ${id}', Handlebars.helpers);\n`;
      // body += `console.log('-- PARTIALS ${id}', Handlebars.partials);\n`;
      body += `export default function(data, options) {
        return Template(data, options);
      };\n`;

      return {
        code: body
      };
    }
  };
};

export default rollupPluginHandlebars;
