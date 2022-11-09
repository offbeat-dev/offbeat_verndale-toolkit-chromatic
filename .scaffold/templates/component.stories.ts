import { Meta } from '@storybook/html';
import template from '../../html/components/{{name}}.hbs';
import '../../scss/components/_{{name}}.scss';

export type {{NameTitleCasePascalCase}}Args = {

};

export default {
  title: 'Components/{{NameTitleCase}}',
  argTypes: {

  }
} as Meta<{{NameTitleCasePascalCase}}Args>;

export const {{NameTitleCasePascalCase}} = story.build<{{NameTitleCasePascalCase}}Args>(template, {

});
