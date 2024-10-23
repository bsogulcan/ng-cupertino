import {Meta, moduleMetadata} from '@storybook/angular';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {NavigationBarComponent} from "../../../app/components/navigation-bar/navigation-bar.component";

export default {
    title: 'Components/NavigationBar',
    component: NavigationBarComponent,
    tags:['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [BrowserModule, CommonModule],
        }),
    ],
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'An Apple Human Interface Guidelines-compliant navigation bar component for Angular applications.',
            },
        },
    },
    argTypes: {
        title: {
            control: 'text',
            description: 'The title displayed in the navigation bar',
        },
        useLargeTitle: {
            control: 'boolean',
            description: 'Enable large title mode (iOS-style)',
        },
        centerTitle: {
            control: 'boolean',
            description: 'Center the title instead of left-aligning it',
        },
        showShadow: {
            control: 'boolean',
            description: 'Show a bottom shadow on the navigation bar',
        },
        leadingButtons: {
            control: 'object',
            description: 'Array of buttons to show on the left side',
        },
        trailingButtons: {
            control: 'object',
            description: 'Array of buttons to show on the right side',
        },
    },
} as Meta<NavigationBarComponent>;

// Template
const Template = {
    render: (args: NavigationBarComponent) => ({
        props: args,
        template: `
      <i-navigation-bar
        [title]="title"
        [leadingButtons]="leadingButtons"
        [trailingButtons]="trailingButtons"
        [useLargeTitle]="useLargeTitle"
        [centerTitle]="centerTitle"
        [showShadow]="showShadow">
      </i-navigation-bar>
    `,
    }),
};

// Basic Navigation Bar
export const Basic = {
    ...Template,
    args: {
        title: 'Messages',
        leadingButtons: [],
        trailingButtons: [],
        useLargeTitle: false,
        centerTitle: false,
        showShadow: true,
    },
};

// With Back Button
export const WithBackButton = {
    ...Template,
    args: {
        title: 'Messages',
        leadingButtons: [
            {
                label: 'Back',
                icon: '',
                action: () => console.log('Back clicked'),
                size:'small',
                style:'plain'
            },
        ],
        trailingButtons: [],
        useLargeTitle: false,
        centerTitle: false,
        showShadow: true,
    },
};

// Large Title Style
export const LargeTitle = {
    ...Template,
    args: {
        title: 'Messages',
        leadingButtons: [
            {
                label: 'Back',
                icon: '',
                action: () => console.log('Back clicked'),
                size:'small',
                style:'plain'
            },
        ],
        trailingButtons: [],
        useLargeTitle: true,
        centerTitle: false,
        showShadow: true,
    },
};

// Multiple Actions
export const MultipleActions = {
    ...Template,
    args: {
        title: 'Messages',
        leadingButtons: [
            {
                label: 'Back',
                icon: '',
                action: () => console.log('Back clicked'),
                size:'small',
                style:'plain'
            },
            {
                label: 'Menu',
                icon: '',
                action: () => console.log('Menu clicked'),
                size:'small',
                style:'plain'
            },
        ],
        trailingButtons: [
            {
                label: 'Add',
                icon: '',
                type: 'primary',
                action: () => console.log('Add clicked'),
                size:'small',
                style:'plain'

            },
            {
                label: 'Delete',
                icon: '',
                type: 'danger',
                action: () => console.log('Delete clicked'),
                size:'small',
                style:'plain'

            },
            {
                label: 'Share',
                icon: '',
                action: () => console.log('Share clicked'),
                size:'small',
                style:'plain'
            },
        ],
        useLargeTitle: false,
        centerTitle: true,
        showShadow: true,
    },
};

// Centered Title
export const CenteredTitle = {
    ...Template,
    args: {
        title: 'Messages',
        leadingButtons: [
            {
                label: 'Cancel',
                action: () => console.log('Cancel clicked'),
                size:'small',
                style:'plain'
            },
        ],
        trailingButtons: [
            {
                label: 'Done',
                type: 'primary',
                action: () => console.log('Done clicked'),
                size:'small',
                style:'plain'
            },
        ],
        useLargeTitle: false,
        centerTitle: true,
        showShadow: true,
    },
};

// Action Types
export const ActionTypes = {
    ...Template,
    args: {
        title: 'Edit Message',
        leadingButtons: [
            {
                label: 'Cancel',
                type: 'default',
                action: () => console.log('Cancel clicked'),
                size:'small',
                style:'plain'
            },
        ],
        trailingButtons: [
            {
                label: 'Save',
                type: 'primary',
                action: () => console.log('Save clicked'),
                size:'small',
                style:'plain'
            },
            {
                label: 'Delete',
                type: 'danger',
                action: () => console.log('Delete clicked'),
                size:'small',
                style:'plain'
            },
        ],
        useLargeTitle: false,
        centerTitle: true,
        showShadow: true,
    },
};

// Icons Only (Mobile Style)
export const IconsOnly = {
    ...Template,
    args: {
        title: 'Messages',
        leadingButtons: [
            {
                icon: '',
                label: 'menu',
                action: () => console.log('Menu clicked'),
                size:'small',
                style:'plain'
            },
        ],
        trailingButtons: [
            {
                icon: '',
                label: 'search',
                action: () => console.log('Search clicked'),
                size:'small',
                style:'plain'
            },
            {
                icon: '',
                label: 'more',
                action: () => console.log('More clicked'),
                size:'small',
                style:'plain'
            },
        ],
        useLargeTitle: false,
        centerTitle: true,
        showShadow: true,
    },
};