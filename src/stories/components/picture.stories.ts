import type { Meta, StoryObj } from '@storybook/html';
import template from '../../html/components/picture.hbs';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/html/writing-stories/introduction
export type PictureProps = {
  srcset: Required<{
    [key: number]: string;
  }>;
  src: string;
  width: string;
  height: string;
  description: string;
};

// This default export determines where your story goes in the story list
// and the UI controls for the arguments that are passed to the template
const meta: Meta<PictureProps> = {
  title: 'Components/Picture',
  tags: ['autodocs'],
  render: template,
  argTypes: {
    srcset: { control: 'object' },
    src: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    description: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<PictureProps>;

/*
 * Below list all the stores for this component
 * More on writing stories with args: https://storybook.js.org/docs/7.0/html/writing-stories/args
 */

export const Default: Story = {
  args: {
    srcset: {
      639: 'https://verndale-image-tools.herokuapp.com/id/Bkci_8qcdvQ?w=639&h=300',
      1023: 'https://verndale-image-tools.herokuapp.com/id/Bkci_8qcdvQ?w=1023&h=500'
    },
    src: 'https://verndale-image-tools.herokuapp.com/id/Bkci_8qcdvQ?w=1280&h=500',
    width: '1280px',
    height: '500px',
    description: 'Image Description'
  }
};
