import type { Meta, StoryObj } from '@storybook/html';
import template from '../../html/modules/mock-api.hbs';
import { rest } from 'msw';

const endpoint = '/api/example';

const results = [
  {
    id: 1,
    title: 'Selling the Experience: Digital Trend in Sports & Entertainment',
    author: 'Jason Lumsden',
    occupation: 'Salesforce Pratice Lead - CMT',
    image: 'https://verndale-image-tools.herokuapp.com/id/FVxkTX-Ejec?w=300&h=500'
  },
  {
    id: 2,
    title: 'Time to Make the Switch to Google Analytics 4',
    author: 'Andrea Goldstein',
    occupation: 'Senior Director, Digital Marketing'
  },
  {
    id: 3,
    title: '9 Steps on the Path to Personalization',
    author: 'Tracey Barber',
    occupation: 'VP, Marketing',
    image: 'https://verndale-image-tools.herokuapp.com/id/HGVtA1zSHo4?w=300&h=500'
  },
  {
    id: 4,
    title: "OpenAI, ChatGPT, & What's Coming With AI",
    author: 'Elizabeth Spranzani',
    occupation: 'Chief Technology Officer'
  },
  {
    id: 5,
    title: "5 Predictions for 2023's Marketing Landscape",
    author: 'Stephanie Nardone',
    occupation: 'Content Marketing Manager',
    image: 'https://verndale-image-tools.herokuapp.com/id/hoV4nneXR-U?w=300&h=500'
  },
  {
    id: 6,
    title: 'How Personalization Afffects SEO: 4 Tips for Success',
    author: 'Andrea Goldstein',
    occupation: 'Senior Director, Digital Marketing'
  }
];

export type MockApiProps = {
  heading: string;
  endpoint: string;
};

const meta: Meta<MockApiProps> = {
  title: 'Modules/Mock API',
  tags: ['autodocs'],
  render: template,
  argTypes: {
    heading: { control: 'text' },
    endpoint: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<MockApiProps>;

export const Default: Story = {
  args: {
    endpoint: endpoint,
    heading: 'Mocked API'
  },
  parameters: {
    msw: {
      handlers: [
        rest.get(endpoint, (req, res, ctx) => {
          return res(ctx.json(results));
        })
      ]
    }
  }
};

export const NoResults: Story = {
  args: {
    endpoint: endpoint,
    heading: 'Mocked API'
  },
  parameters: {
    msw: {
      handlers: [
        rest.get(endpoint, (req, res, ctx) => {
          return res(ctx.json([]));
        })
      ]
    }
  }
};

export const Error: Story = {
  args: {
    endpoint: endpoint,
    heading: 'Mocked API'
  },
  parameters: {
    msw: {
      handlers: [
        rest.get(endpoint, (req, res, ctx) => {
          return res(ctx.status(404));
        })
      ]
    }
  }
};
