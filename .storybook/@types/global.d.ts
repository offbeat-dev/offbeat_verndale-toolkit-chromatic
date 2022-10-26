import { build } from '../../.storybook/utils/story';

declare global {
  const story: {
    build: typeof build;
  };
}
