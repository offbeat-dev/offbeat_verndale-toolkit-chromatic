import type { Meta, StoryObj } from '@storybook/html';
import template from '../../html/components/picture.hbs';

export type PictureArgs = {
  srcset: Required<{
    [key: number]: string;
  }>;
  src: string;
  width: string;
  height: string;
  description: string;
};

export default {
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
} as Meta<PictureArgs>;

export const Default: StoryObj<PictureArgs> = {
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
