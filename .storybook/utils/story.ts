import { TemplateDelegate } from 'handlebars';
import { Story } from '@storybook/html';
import config from '../../config';

const { publicPath } = config;

export const build = <T>(
  template: TemplateDelegate,
  args: T,
  layout: 'fullscreen' | 'padded' = 'fullscreen'
) => {
  const Template: Story<T> = ((args: T) =>
    template({ ...args, publicPath })).bind({});

  Template.args = args;

  Template.parameters = {
    layout,
    docs: {
      source: {
        code: template({ ...args, showScripts: true, publicPath })
          .replace(/\uFEFF/gi, '')
          .replace(/^\s*\n/gm, '')
          .replace(/&#x3D;/g, '=')
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&quot;/g, '"')
          .replace(/&#039;/g, "'")
      }
    },
    actions: { disable: true }
  };

  return Template;
};
