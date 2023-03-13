import type { Meta, StoryObj } from "@storybook/html";
import template from '../../html/modules/{{name}}.hbs';

export type {{NameTitleCasePascalCase}}Args = {

};

export default {
  title: 'Modules/{{NameTitleCase}}',
  tags: ["autodocs"],
  render: template,
  argTypes: {

  }
} as Meta<{{NameTitleCasePascalCase}}Args>;

export const Default: StoryObj<{{NameTitleCasePascalCase}}Args> = {

};
