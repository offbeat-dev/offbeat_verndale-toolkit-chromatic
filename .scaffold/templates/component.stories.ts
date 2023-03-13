import type { Meta, StoryObj } from "@storybook/html";
import template from '../../html/components/{{name}}.hbs';

export type {{NameTitleCasePascalCase}}Args = {

};

export default {
  title: 'Components/{{NameTitleCase}}',
  tags: ["autodocs"],
  render: template,
  argTypes: {

  }
} as Meta<{{NameTitleCasePascalCase}}Args>;

export const Default: StoryObj<{{NameTitleCasePascalCase}}Args> = {

};
