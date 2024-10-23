import {Meta, StoryObj} from '@storybook/angular';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {moduleMetadata} from '@storybook/angular';
import {TextFieldComponent} from "../../../app/components/text-field/text-field.component";

const meta: Meta<TextFieldComponent> = {
    title: 'Components/Text Field',
    component: TextFieldComponent,
    decorators: [
        moduleMetadata({
            imports: [ReactiveFormsModule],
        }),
    ],
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: `
A minimal text field component implementing Apple's modern Human Interface Guidelines. 
Features a clean, simple design with a bottom border and floating clear button.

## Features
- Clean, minimal design
- Bottom border with focus state
- Clear button (optional)
- Dark mode support
- Reactive Forms compatibility

## Usage
\`\`\`html
<i-text-field
  label="Title"
  placeholder="Value"
  [(ngModel)]="textValue">
</i-text-field>
\`\`\`
        `,
            },
        },
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Label text displayed above the input',
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder text shown when the input is empty',
        },
        type: {
            control: 'select',
            options: ['text', 'email', 'password', 'number', 'tel'],
            description: 'Input type attribute',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the input is disabled',
        },
        showClearButton: {
            control: 'boolean',
            description: 'Show/hide the clear button when input has value',
        },
    },
};

export default meta;
type Story = StoryObj<TextFieldComponent>;

// Empty state
export const Empty: Story = {
    args: {
        label: 'Title',
        placeholder: 'Value',
    },
};

// With Bottom Border
export const BottomBorder: Story = {
    args: {
        label: 'Title',
        placeholder: 'Value',
        showBorder: true
    },
};


// With value
export const WithValue: Story = {
    args: {
        label: 'Title',
        placeholder: 'Value',
        value: 'Input text',
    },
    render: (args) => ({
        props: {
            ...args,
            value: 'Input text',
        },
        template: `
      <i-text-field
        [label]="label"
        [placeholder]="placeholder"
        [value]="value">
      </i-text-field>
    `,
    }),
};

// With error
export const WithError: Story = {
    args: {
        label: 'Title',
        placeholder: 'Value',
        value: 'Invalid input',
    },
    render: (args) => ({
        props: {
            ...args,
            value: 'Invalid input',
        },
        template: `
      <i-text-field
        [label]="label"
        [placeholder]="placeholder"
        [error]="error"
        [value]="value">
      </i-text-field>
    `,
    }),
};

// Without clear button
export const WithoutClearButton: Story = {
    args: {
        label: 'Title',
        placeholder: 'Value',
        showClearButton: false,
        value: 'Input text',
    },
    render: (args) => ({
        props: {
            ...args,
            value: 'Input text',
        },
        template: `
      <i-text-field
        [label]="label"
        [placeholder]="placeholder"
        [showClearButton]="showClearButton"
        [value]="value">
      </i-text-field>
    `,
    }),
};

// Password field
export const Password: Story = {
    args: {
        label: 'Password',
        type: 'password',
        placeholder: 'Enter password',
    },
};

// Dark theme
export const DarkTheme: Story = {
    args: {
        label: 'Title',
        placeholder: 'Value',
        value: 'Dark mode text',
    },
    parameters: {
        backgrounds: {
            default: 'dark',
        },
        docs: {
            description: {
                story: 'Text field appearance in dark mode',
            },
        },
    },
    decorators: [
        (story) => ({
            template: `
        <div class="dark-theme" style="padding: 20px; background-color: #1C1C1E;">
          ${story}
        </div>
      `,
        }),
    ],
};

// Form example
export const FormExample: Story = {
    render: () => ({
        template: `
      <div style="width: 300px;">
        <i-text-field
          label="First Name"
          placeholder="Enter first name"
          style="margin-bottom: 24px;">
        </i-text-field>
        
        <i-text-field
          label="Last Name"
          placeholder="Enter last name"
          style="margin-bottom: 24px;">
        </i-text-field>
        
        <i-text-field
          label="Email"
          type="email"
          placeholder="Enter email">
        </i-text-field>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Example of multiple fields in a form layout',
            },
        },
    },
};

// Interactive example with validation
export const InteractiveExample: Story = {
    render: () => ({
        props: {
            emailControl: new FormControl(''),
            validateEmail: (event: any) => {
                const email = event.target.value;
                const input = event.target;
                if (email && !email.includes('@')) {
                    input.parentElement.parentElement.classList.add('has-error');
                } else {
                    input.parentElement.parentElement.classList.remove('has-error');
                }
            },
        },
        template: `
      <i-text-field
        label="Email"
        type="email"
        placeholder="Enter your email"
        [formControl]="emailControl"
        (input)="validateEmail($event)">
      </i-text-field>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Interactive example with email validation',
            },
        },
    },
};