import {Component, inject, Input} from '@angular/core';
import {CommonModule, NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import {NavigationBarComponent} from '../navigation-bar/navigation-bar.component';
import {ButtonComponent} from '../button/button.component';
import {IconsModule} from '../../icons/icons.module';
import {Router, RouterLink} from "@angular/router";

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
    link?: string,
}

@Component({
    selector: 'i-sidebar',
    standalone: true,
    imports: [CommonModule, NavigationBarComponent, ButtonComponent, IconsModule, RouterLink],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
    @Input() title: string = 'Title';
    @Input() isDarkMode: boolean = false;
    @Input() items: MenuItem[] = [];

    router = inject(Router);

    onItemClick(item: MenuItem) {
        this.resetActiveStates(this.items);
        item.isActive = true;
        if (item.link) {
            this.router.navigate([item.link]);
        }
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
