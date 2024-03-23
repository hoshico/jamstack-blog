import { Button } from '../components/Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'button',
  component: Button,
  argTypes: {
    label: {
      options: ['BaseButton'],
      control: { type: 'select' },
    },
  },
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Base: Story = {
  args: {
    label: 'BaseButton',
    className: '',
    onClick: () => {},
  },
};
