import type {Meta, StoryObj} from '@storybook/angular';
import {fn} from '@storybook/test';
import {SegmentedControlsComponent} from './segmented-controls.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<SegmentedControlsComponent> = {
    title: 'Components/SegmentedControls',
    component: SegmentedControlsComponent,
    tags: ['autodocs'],
    argTypes: {},
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {selectionChange: fn()},
};

export default meta;
type Story = StoryObj<SegmentedControlsComponent>;

export const Basic: Story = {
    args: {
        options: [
            {id: 1, label: 'Label'},
            {id: 2, label: 'Label'},
            {id: 3, label: 'Label'},
            {id: 4, label: 'Label'},
        ],
        selectedIndex: 0,
        disabled: false,
    },
};
