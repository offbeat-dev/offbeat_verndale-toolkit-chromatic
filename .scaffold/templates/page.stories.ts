import { Meta } from '@storybook/html';
import template from '../../html/templates/{{name}}.hbs';

export type {{NameTitleCasePascalCase}}Args = {

};

export default {
  title: 'Templates/{{NameTitleCase}}'
} as Meta<{{NameTitleCasePascalCase}}Args>;

export const {{NameTitleCasePascalCase}} = story.build<{{NameTitleCasePascalCase}}Args>(template, {

});
