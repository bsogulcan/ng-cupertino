import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuItem, SidebarComponent} from '../../../app/components/sidebar/sidebar.component';

@Component({
  selector: 'storybook-sidebar',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  template: `
    <div style="width: 300px; height: 600px;">
      <i-sidebar
        [title]="title"
        [items]="items">
      </i-sidebar>
    </div>
  `,
})
export class SidebarStoryComponent {

  @Input()
  title: string = '';

  @Input()
  items: MenuItem[] = [];
}
