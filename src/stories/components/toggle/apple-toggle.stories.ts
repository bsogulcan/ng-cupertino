import { Meta, StoryObj } from '@storybook/angular';
import {ToggleComponent} from '../../../app/components/toggle/toggle.component';

const meta: Meta<ToggleComponent> = {
  title: 'Components/Toggle',
  component: ToggleComponent,
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'The checked state of the toggle',
    },
    label: {
      control: 'text',
      description: 'Label text to display next to the toggle',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled',
    },
    id: {
      control: 'text',
      description: 'Unique identifier for the toggle',
    },
    checkedChange: {
      action: 'checkedChange',
      description: 'Event emitted when toggle state changes',
    },
  },
  parameters: {
    componentSubtitle: 'A toggle switch component following Apple Human Interface Design guidelines',
    docs: {
      description: {
        component: `
## Overview
The Apple Toggle component is a form control that allows users to switch between two states.
It follows Apple's Human Interface Design guidelines for appearance and interaction.

## Usage
\`\`\`html
<app-i-toggle
  [(checked)]="isEnabled"
  [label]="'Enable Feature'"
  (checkedChange)="onToggleChange($event)">
</app-i-toggle>
\`\`\`

## Accessibility
- Supports keyboard navigation (Tab to focus, Space to toggle)
- Includes proper ARIA attributes
- High contrast states
- Focus indicators
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<ToggleComponent>;

// Default state
export const Default: Story = {
  args: {
    checked: false,
    label: 'Toggle Feature',
    disabled: false,
    id: 'default-toggle',
  },
};

// Checked state
export const Checked: Story = {
  args: {
    checked: true,
    label: 'Feature Enabled',
    disabled: false,
    id: 'checked-toggle',
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    checked: false,
    label: 'Disabled Toggle',
    disabled: true,
    id: 'disabled-toggle',
  },
};

// Checked and Disabled
export const CheckedAndDisabled: Story = {
  args: {
    checked: true,
    label: 'Enabled but Disabled',
    disabled: true,
    id: 'checked-disabled-toggle',
  },
};
