import { Meta } from '@storybook/html';
import template from '../../html/modules/accordion.hbs';
import { ButtonArgs } from '../components/button/1-light.stories';

export type AccordionArgs = {
  title: string;
  description: string;
  items: {
    title: string;
    heading: string;
    copy: string;
    cta?: ButtonArgs;
  }[];
};

export default {
  title: 'Modules/Accordion',
  argTypes: {
    title: {
      name: 'Title',
      type: { required: true }
    },
    description: {
      name: 'Description',
      type: { required: true }
    },
    items: {
      name: 'Items',
      type: { required: true }
    }
  }
} as Meta<AccordionArgs>;

export const Accordion = story.build<AccordionArgs>(template, {
  title: 'Accordion Heading',
  description:
    'Praesent dui elit, porttitor sed vulputate id, mollis sed nibh. Morbi molestie scelerisque diam, at efficitur erat auctor vitae. Proin vehicula volutpat consequat. Donec sit amet magna sed urna egestas feugiat in et nisi. Suspendisse risus dolor, maximus sit amet pharetra sed, convallis sed orci. Nulla sit amet nisi cursus, blandit ipsum vel, feugiat nisl.',
  items: [
    {
      title: 'Accordion Tab Title',
      heading: 'Accordion Tab Heading',
      copy: 'Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.',
      cta: {
        label: 'Buy Now',
        type: 'button',
        className: 'primary'
      }
    },
    {
      title: 'Accordion Tab With Image',
      heading: 'Accordion Tab Heading',
      copy: 'Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.<br><img src="/images/image.jpeg" alt="Image Description" loading="lazy" />'
    }
  ]
});
