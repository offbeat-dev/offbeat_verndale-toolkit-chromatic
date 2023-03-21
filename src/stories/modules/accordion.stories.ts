import type { Meta, StoryObj } from '@storybook/html';
import { v4 as uuidv4 } from 'uuid';
import template from '../../html/modules/accordion.hbs';
import { Link, ButtonProps } from '../components/button.stories';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/html/writing-stories/introduction
export type AccordionProps = {
  title: string;
  description: string;
  items: {
    id: string;
    title: string;
    heading: string;
    copy: string;
    cta?: ButtonProps;
  }[];
};

// This default export determines where your story goes in the story list
// and the UI controls for the arguments that are passed to the template
const meta: Meta<AccordionProps> = {
  title: 'Modules/Accordion',
  tags: ['autodocs'],
  render: template,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    items: { control: 'object' }
  }
};

export default meta;
type Story = StoryObj<AccordionProps>;

/*
 * Below list all the stores for this component
 * More on writing stories with args: https://storybook.js.org/docs/7.0/html/writing-stories/args
 */

export const Default: Story = {
  args: {
    title: 'Accordion Heading',
    description:
      'Praesent dui elit, porttitor sed vulputate id, mollis sed nibh. Morbi molestie scelerisque diam, at efficitur erat auctor vitae. Proin vehicula volutpat consequat. Donec sit amet magna sed urna egestas feugiat in et nisi. Suspendisse risus dolor, maximus sit amet pharetra sed, convallis sed orci. Nulla sit amet nisi cursus, blandit ipsum vel, feugiat nisl.',
    items: [
      {
        id: uuidv4(),
        title: 'Accordion Tab Title',
        heading: 'Accordion Tab Heading',
        copy: 'Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.',
        cta: Link.args as ButtonProps
      },
      {
        id: uuidv4(),
        title: 'Accordion Tab With Image',
        heading: 'Accordion Tab Heading',
        copy: 'Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.<br><img src="/images/image.jpeg" alt="Image Description" loading="lazy" />'
      }
    ]
  }
};
