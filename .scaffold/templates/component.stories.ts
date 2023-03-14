import type { Meta, StoryObj } from "@storybook/html";
import template from '../../html/components/{{name}}.hbs';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/html/writing-stories/introduction
export type {{NameTitleCasePascalCase}}Props = {

};

// This default export determines where your story goes in the story list
// and the UI controls for the arguments that are passed to the template
const meta: Meta<{{NameTitleCasePascalCase}}Props> = {
  title: 'Components/{{NameTitleCase}}',
  tags: ["autodocs"],
  render: template,
  argTypes: {

  }
};

export default meta;
type Story = StoryObj<{{NameTitleCasePascalCase}}Props>;

/*
 * Below list all the stores for this component
 * More on writing stories with args: https://storybook.js.org/docs/7.0/html/writing-stories/args
 */

export const Default: Story = {

};
