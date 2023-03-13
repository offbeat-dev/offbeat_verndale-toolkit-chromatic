import type { Meta, StoryObj } from "@storybook/html";
import template from '../../html/templates/{{name}}.hbs';

export type {{NameTitleCasePascalCase}}Args = {

};

export default {
  title: 'Templates/{{NameTitleCase}}',
  tags: ["autodocs"],
  render: template,
} as Meta<{{NameTitleCasePascalCase}}Args>;

export const Default: StoryObj<{{NameTitleCasePascalCase}}Args> = {

};
