import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {Component, ViewChild} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {ContextMenuComponent} from '../../../app/components/context-menu/context-menu.component';
import {ContextMenuItemComponent} from '../../../app/components/context-menu-item/context-menu-item.component';
import {ContextMenuDividerComponent} from '../../../app/components/context-menu-divider/context-menu-divider.component';
import {IconsModule} from '../../../app/icons/icons.module';

@Component({
  selector: 'story-host',
  standalone: true,
  imports: [
    ContextMenuComponent, IconsModule
  ],
  template: `
    <div
      (contextmenu)="onContextMenu($event)"
      style="padding: 24px; border-radius: 8px; border: 1px solid #ccc; cursor: context-menu; margin: 100px;"
    >
      {{ text }}

      <app-context-menu #contextMenu>
        <ng-content></ng-content>
      </app-context-menu>
    </div>
  `
})
class StorybookHostComponent {
  @ViewChild('contextMenu') contextMenu!: ContextMenuComponent;
  text = 'Right click here';

  onContextMenu(event: MouseEvent) {
    event.preventDefault();
    this.contextMenu.open(event.clientX, event.clientY);
  }
}

export default {
  title: 'Components/Apple Context Menu',
  component: ContextMenuComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, BrowserAnimationsModule, ContextMenuComponent,
        ContextMenuItemComponent,
        ContextMenuDividerComponent,
        StorybookHostComponent,IconsModule],
    })
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A context menu component that follows Apple\'s Human Interface Guidelines'
      }
    }
  }
} as Meta<ContextMenuComponent>;

export const FileMenu: StoryObj<ContextMenuComponent> = {
  render: () => ({
    template: `
      <story-host>
        <app-context-menu-item
          label="Open"
          icon="Test"
          shortcut="">
          <i-feather leading [name]="'file'"></i-feather>
          <span>Open</span>
          <span trailing>⌘O</span>
        </app-context-menu-item>

        <app-context-menu-item
          label="Open Recent"
          icon="🕒"
          hasSubmenu="true">
        </app-context-menu-item>
        <app-context-menu-divider></app-context-menu-divider>
        <app-context-menu-item
          label="Save"
          icon="💾"
          shortcut="⌘S">
        </app-context-menu-item>
        <app-context-menu-item
          label="Save As..."
          icon="💾"
          shortcut="⇧⌘S">
        </app-context-menu-item>
        <app-context-menu-divider></app-context-menu-divider>
        <app-context-menu-item
          label="Move to Trash"
          icon="🗑️"
          destructive="true"
          shortcut="⌘⌫">
        </app-context-menu-item>
      </story-host>
    `
  })
};

export const EditMenu: StoryObj<ContextMenuComponent> = {
  render: () => ({
    template: `
      <story-host>
        <app-context-menu-item
          label="Cut"
          icon="✂️"
          shortcut="⌘X">
        </app-context-menu-item>
        <app-context-menu-item
          label="Copy"
          icon="📋"
          shortcut="⌘C">
        </app-context-menu-item>
        <app-context-menu-item
          label="Paste"
          icon="📎"
          shortcut="⌘V"
          disabled="true">
        </app-context-menu-item>
      </story-host>
    `
  })
};
