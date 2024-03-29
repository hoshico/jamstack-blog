import type { Preview } from '@storybook/react';

// NOTE: 全てのstoryで適用したいパラメーターを記載
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
