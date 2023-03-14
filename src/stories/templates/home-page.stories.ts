import type { Meta, StoryObj } from '@storybook/html';
import template from '../../html/templates/home-page.hbs';
import {
  Default as Accordion,
  AccordionProps
} from '../modules/accordion.stories';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/html/writing-stories/introduction
export type HomepageProps = {
  accordion: AccordionProps;
};

// This default export determines where your story goes in the story list
// and the UI controls for the arguments that are passed to the template
const meta: Meta<HomepageProps> = {
  title: 'Templates/Home Page',
  tags: ['autodocs'],
  render: template,
  argTypes: {
    accordion: { control: 'object' }
  }
};

export default meta;
type Story = StoryObj<HomepageProps>;

/*
 * Below list all the stores for this component
 * More on writing stories with args: https://storybook.js.org/docs/7.0/html/writing-stories/args
 */

export const Default: Story = {
  args: {
    accordion: Accordion.args as AccordionProps
  }
};
