import type { Meta, StoryObj } from '@storybook/html';
import template from '../../html/modules/mock-api.hbs';

const endpoint = '/mock/api/example';

const films = [
  {
    title: 'A New Hope',
    episode_id: 4,
    opening_crawl:
      '(Mocked) Rebel spaceships have won their first victory against the evil Galactic Empire.'
  },
  {
    title: 'Empire Strikes Back',
    episode_id: 5,
    opening_crawl:
      '(Mocked) Imperial troops are pursuing the Rebel forces across the galaxy.'
  },
  {
    title: 'Return of the Jedi',
    episode_id: 6,
    opening_crawl:
      '(Mocked) Luke Skywalker has returned to his home planet of Tatooine to rescue Han Solo.'
  },
  {
    title: 'The Phantom Menace',
    episode_id: 1,
    opening_crawl:
      '(Mocked) Turmoil has engulfed thenGalactic Republic. The taxationnof trade routes to outlying starnsystems is in dispute.'
  },
  {
    title: 'Attack of the Clones',
    episode_id: 2,
    opening_crawl:
      '(Mocked) There is unrest in the Galactic Senate. Several thousand solar systems have declared their intentions to leave the Republic.'
  },
  {
    title: 'Revenge of the Sith',
    episode_id: 3,
    opening_crawl:
      '(Mocked) War! The Republic is crumbling under attacks by the ruthless Sith Lord, Count Dooku.'
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
    mockData: [
      {
        url: endpoint,
        method: 'GET',
        status: 200,
        response: {
          items: films
        }
      }
    ]
  }
};
