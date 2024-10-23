import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';

import { ProgressBarComponent } from './progress-bar.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ProgressBarComponent> = {
  title: 'Components/ProgressBar',
  component: ProgressBarComponent,
  tags: ['autodocs'],
  argTypes: {
    shape: { control: 'radio', options: ['circle', 'rectangle'] },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
};

export default meta;
type Story = StoryObj<ProgressBarComponent>;

export const Filled: Story = {
  args: {
    value: 40,
    status: 'Status...',
    shape: 'circle',
  },
};
