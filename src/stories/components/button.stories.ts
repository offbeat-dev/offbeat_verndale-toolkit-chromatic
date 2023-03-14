import type { Meta, StoryObj } from '@storybook/html';
import template from '../../html/components/button.hbs';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/html/writing-stories/introduction
export type ButtonProps = {
  label: string;
  type: 'button' | 'submit' | 'link';
  className: 'primary' | 'secondary';
  style?: 'solid' | 'outline';
  size?: string;
  icon?: {
    name: string;
    viewBox: string;
  };
  disabled?: boolean;
};

// This default export determines where your story goes in the story list
// and the UI controls for the arguments that are passed to the template
const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: template,
  argTypes: {
    label: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'link']
    },
    className: {
      control: { type: 'select' },
      options: ['primary', 'secondary']
    },
    style: {
      control: { type: 'select' },
      options: ['solid', 'outline']
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'large']
    },
    disabled: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<ButtonProps>;

/*
 * Below list all the stores for this component
 * More on writing stories with args: https://storybook.js.org/docs/7.0/html/writing-stories/args
 */

export const Default: Story = {
  args: {
    label: 'Buy Now',
    type: 'button',
    className: 'primary'
  }
};

export const Submit: Story = {
  args: {
    label: 'Buy Now',
    type: 'submit',
    className: 'primary'
  }
};

export const Link: Story = {
  args: {
    label: 'Buy Now',
    type: 'link',
    className: 'primary'
  }
};

export const Outline: Story = {
  args: {
    label: 'Buy Now',
    type: 'button',
    className: 'primary',
    style: 'outline'
  }
};

export const WithIcon: Story = {
  args: {
    label: 'Buy Now',
    type: 'button',
    className: 'primary',
    icon: {
      name: 'file-pdf',
      viewBox: '0 0 30 30'
    }
  }
};

export const Small: Story = {
  args: {
    label: 'Buy Now',
    type: 'button',
    className: 'primary',
    size: 'small'
  }
};

export const Disabled: Story = {
  args: {
    label: 'Buy Now',
    type: 'button',
    className: 'primary',
    disabled: true
  }
};
