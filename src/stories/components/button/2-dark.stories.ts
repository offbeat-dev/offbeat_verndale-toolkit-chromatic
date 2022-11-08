import { Meta } from '@storybook/html';
import template from '../../../html/components/button.hbs';
import { ButtonArgs } from './1-light.stories';
import '../../../scss/components/_button.scss';

export default {
  title: 'Components/Button/On Dark',
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
      description: 'Text that goes inside the button.',
      type: { name: 'string', required: true }
    },
    type: {
      name: 'Type',
      description:
        'Indicates if the component is of type template, submit or link.',
      control: 'radio',
      options: ['button', 'submit', 'link'],
      type: { name: 'string', required: true },
      table: { defaultValue: { summary: 'button' } }
    },
    className: {
      name: 'Class name',
      description: 'Indicates the styles of the button.',
      control: 'radio',
      options: ['primary', 'secondary'],
      type: { name: 'string', required: true },
      table: { defaultValue: { summary: 'primary' } }
    },
    style: {
      name: 'Style',
      description: 'Indicates the styles of the button.',
      control: 'radio',
      options: ['solid', 'outline'],
      type: { name: 'string' },
      table: { defaultValue: { summary: 'solid' } }
    },
    size: {
      name: 'Size',
      description: 'Indicates if the size is large or small.',
      control: 'radio',
      options: ['large', 'small'],
      type: { name: 'string' },
      table: { defaultValue: { summary: 'large' } }
    },
    icon: {
      name: 'Icon',
      description: 'Indicates if the button displays an icon.',
      control: 'object',
      type: { name: 'string' }
    },
    disabled: {
      name: 'Disabled',
      description: 'Indicates if the button is disabled.',
      table: { defaultValue: { summary: false } },
      type: { name: 'boolean' }
    }
  }
} as Meta<ButtonArgs>;

export const Default = story.build<ButtonArgs>(
  template,
  {
    label: 'Buy Now',
    type: 'button',
    className: 'primary'
  },
  'padded'
);

export const Submit = story.build<ButtonArgs>(
  template,
  {
    label: 'Buy Now',
    type: 'submit',
    className: 'primary'
  },
  'padded'
);

export const Link = story.build<ButtonArgs>(
  template,
  {
    label: 'Buy Now',
    type: 'link',
    className: 'primary'
  },
  'padded'
);

export const Outline = story.build<ButtonArgs>(
  template,
  {
    label: 'Buy Now',
    type: 'button',
    className: 'primary',
    style: 'outline'
  },
  'padded'
);

export const WithIcon = story.build<ButtonArgs>(
  template,
  {
    label: 'Buy Now',
    type: 'button',
    className: 'primary',
    icon: {
      name: 'file-pdf',
      viewBox: '0 0 30 30'
    }
  },
  'padded'
);

export const Small = story.build<ButtonArgs>(
  template,
  {
    label: 'Buy Now',
    type: 'button',
    className: 'primary',
    size: 'small'
  },
  'padded'
);

export const Disabled = story.build<ButtonArgs>(
  template,
  {
    label: 'Buy Now',
    type: 'button',
    className: 'primary',
    disabled: true
  },
  'padded'
);

const DisabledLink = story.build<ButtonArgs>(
  template,
  {
    label: 'Buy Now',
    type: 'link',
    className: 'primary',
    disabled: true
  },
  'padded'
);
DisabledLink.storyName = 'Disabled (Link)';

export { DisabledLink };
