import {Component, Input} from '@angular/core';
import {CommonModule, NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import {NavigationBarComponent} from '../navigation-bar/navigation-bar.component';
import {ButtonComponent} from '../button/button.component';
import {IconsModule} from '../../icons/icons.module';

export interface MenuItem {
  id: string;
  title: string;
  icon?: string;
  detail?: string;
  detailIcon?: string;
  isActive?: boolean;
  hasDetailIcon?: boolean;
  children?: MenuItem[];
  type: 'item' | 'section';
  isExpanded?: boolean;
}

@Component({
  selector: 'i-sidebar',
  standalone: true,
  imports: [CommonModule, NavigationBarComponent, ButtonComponent, IconsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() title: string = 'Title';
  @Input() isDarkMode: boolean = false;
  @Input() items: MenuItem[] = [
    {
      id: '1',
      title: 'Title',
      type: 'item'
    },
    {
      id: '2',
      title: 'Title',
      type: 'item'
    },
    {
      id: '3',
      title: 'Title',
      type: 'item'
    },
    {
      id: '4',
      title: 'Section 2',
      type: 'section',
      isExpanded: true,
      children: [
        {
          id: '4-1',
          title: 'Title',
          detail: 'Detail',
          type: 'item'
        },
        {
          id: '4-2',
          title: 'Title',
          detail: 'Detail',
          type: 'item',
          isActive: true
        },
        {
          id: '4-3',
          title: 'Title',
          type: 'item'
        }
      ]
    },
    {
      id: '5',
      title: 'Section 3',
      type: 'section',
      isExpanded: false,
      children: []
    },
    {
      id: '6',
      title: 'Section 4',
      type: 'section',
      isExpanded: true,
      children: [
        {
          id: '6-1',
          title: 'Title',
          type: 'item'
        },
        {
          id: '6-2',
          title: 'Title',
          hasDetailIcon: true,
          type: 'item'
        },
        {
          id: '6-3',
          title: 'Title',
          detail: 'Detail',
          type: 'item'
        },
        {
          id: '6-4',
          title: 'Title',
          detail: 'Detail',
          hasDetailIcon: true,
          type: 'item'
        }
      ]
    }
  ];

  onItemClick(item: MenuItem) {
    this.resetActiveStates(this.items);
    item.isActive = true;
  }

  toggleSection(section: MenuItem) {
    if (section.type === 'section') {
      section.isExpanded = !section.isExpanded;
    }
  }

  private resetActiveStates(items: MenuItem[]) {
    items.forEach(item => {
      item.isActive = false;
      if (item.children) {
        this.resetActiveStates(item.children);
      }
    });
  }
}
