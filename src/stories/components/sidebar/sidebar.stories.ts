import {SidebarComponent} from '../../../app/components/sidebar/sidebar.component';
import {Meta, type StoryObj} from '@storybook/angular';
import {SidebarStoryComponent} from './sidebar-story.component';
import {ButtonComponent} from '../button/button.component';

const meta: Meta<SidebarStoryComponent> = {
  title: 'Components/Sidebar',
  component: SidebarComponent,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Main title of the sidebar',
    },
    items: {
      control: 'object',
      description: 'Navigation items structure',
    },
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        {name: 'light', value: '#ffffff'},
        {name: 'dark', value: '#000000'},
      ],
    },
  },
};

export default meta;
type Story = StoryObj<SidebarStoryComponent>;


export const Basic: Story = {
  args: {
    title: 'Basic Menu',
    items: [
      {
        id: '1',
        icon:'github',
        title: 'Dashboard',
        type: 'item',
      },
      {
        id: '2',
        title: 'Profile',
        type: 'item',
      },
      {
        id: '3',
        title: 'Settings',
        type: 'item',
      },
    ]
  },
};

export const WithSections: Story = {
  args: {
    title: 'Project Manager',
    items: [
      {
        id: '1',
        title: 'Overview',
        type: 'item',
      },
      {
        id: '2',
        title: 'Projects',
        type: 'section',
        isExpanded: true,
        children: [
          {
            id: '2-1',
            title: 'Active Projects',
            type: 'item',
            detail: '5',
          },
          {
            id: '2-2',
            title: 'Archived',
            type: 'item',
            detail: '12',
          },
        ],
      },
      {
        id: '3',
        title: 'Team',
        type: 'section',
        isExpanded: true,
        children: [
          {
            id: '3-1',
            title: 'Members',
            type: 'item',
            hasDetailIcon: true,
          },
          {
            id: '3-2',
            title: 'Groups',
            type: 'item',
            hasDetailIcon: true,
          },
        ],
      },
    ],
  }
}

// Deep nested structure
export const DeepNested: Story = {
  args: {
    title: 'File Explorer',
    items: [
      {
        id: '1',
        title: 'Documents',
        type: 'section',
        isExpanded: true,
        children: [
          {
            id: '1-1',
            title: 'Projects',
            type: 'section',
            isExpanded: true,
            children: [
              {
                id: '1-1-1',
                title: '2024',
                type: 'section',
                isExpanded: true,
                children: [
                  {
                    id: '1-1-1-1',
                    title: 'Q1 Report.pdf',
                    type: 'item',
                    detail: 'PDF',
                  },
                  {
                    id: '1-1-1-2',
                    title: 'Q2 Planning',
                    type: 'item',
                    hasDetailIcon: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  }
};

// Dark mode version
export const DarkMode: Story = {
  args: {
    ...WithSections.args,
    title: 'Dark Theme',
  }
};

export const WithActiveStates: Story = {
  args: {
    title: 'With Active States',
    items: [
      {
        id: '1',
        title: 'Home',
        type: 'item',
      },
      {
        id: '2',
        title: 'Projects',
        type: 'section',
        isExpanded: true,
        children: [
          {
            id: '2-1',
            title: 'Project A',
            type: 'item',
            isActive: true,
            detail: 'Active',
          },
          {
            id: '2-2',
            title: 'Project B',
            type: 'item',
            detail: 'In Progress',
          },
        ],
      },
    ],
  }
};

// All features combined
export const AllFeatures: Story = {
  args: {
    title: 'All Features',
    items: [
      {
        id: '1',
        title: 'Dashboard',
        type: 'item',
        isActive: true,
      },
      {
        id: '2',
        title: 'Projects',
        type: 'section',
        isExpanded: true,
        children: [
          {
            id: '2-1',
            title: 'Active',
            type: 'section',
            isExpanded: true,
            children: [
              {
                id: '2-1-1',
                title: 'Project X',
                type: 'item',
                detail: 'Due Tomorrow',
              },
              {
                id: '2-1-2',
                title: 'Project Y',
                type: 'item',
                hasDetailIcon: true,
              },
            ],
          },
          {
            id: '2-2',
            title: 'Archived',
            type: 'item',
            detail: '10+',
          },
        ],
      },
      {
        id: '3',
        title: 'Settings',
        type: 'section',
        isExpanded: false,
        children: [
          {
            id: '3-1',
            title: 'General',
            type: 'item',
          },
          {
            id: '3-2',
            title: 'Security',
            type: 'item',
            hasDetailIcon: true,
          },
        ],
      },
    ],
  }
};
