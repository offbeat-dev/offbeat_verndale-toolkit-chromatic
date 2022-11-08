import { Meta } from '@storybook/html';
import template from '../../html/modules/{{name}}.hbs';

export type {{NameTitleCasePascalCase}}Args = {

};

export default {
  title: 'Modules/{{NameTitleCase}}',
  argTypes: {

  }
} as Meta<{{NameTitleCasePascalCase}}Args>;

export const {{NameTitleCasePascalCase}} = story.build<{{NameTitleCasePascalCase}}Args>(template, {

});
