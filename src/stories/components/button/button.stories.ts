import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';

import { ButtonComponent } from './button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    style: { control: 'radio', options: ['filled', 'tinted', 'gray', 'plain'] },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Filled: Story = {
  args: {
    disabled: false,
    label: 'Play',
    style: 'filled',
    size: 'small',
  },
};

export const Tinted: Story = {
  args: {
    label: 'Play',
    style: 'tinted',
    size: "small"
  },
};

export const Gray: Story = {
  args: {
    label: 'Play',
    style: 'gray',
    size: "small"
  },
};

export const Plain: Story = {
  args: {
    label: 'Play',
    style: 'plain',
    size: "small"
  },
};

export const Small: Story = {
  args: {
    label: 'Play',
    size: 'small',
    style: "filled"
  },
};

export const Medium: Story = {
  args: {
    label: 'Play',
    size: 'medium',
    style: "filled"
  },
};

export const Large: Story = {
  args: {
    label: 'Play',
    size: 'large',
    style: "filled"
  },
};

export const Disable: Story = {
  args: {
    label: 'Play',
    disabled: true,
    style: "filled",
    size: "small"
  },
};
