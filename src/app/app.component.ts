import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ButtonComponent} from "./components/button/button.component";
import {MenuItem, SidebarComponent} from "./components/sidebar/sidebar.component";
import {NavigationBarComponent} from "./components/navigation-bar/navigation-bar.component";
import {ToolbarComponent} from "./components/toolbar/toolbar.component";
import {FeatherModule} from "angular-feather";
import {ToggleComponent} from "./components/toggle/toggle.component";
import {CdkMenu, CdkMenuItem, CdkMenuTrigger} from "@angular/cdk/menu";
import {NgIf} from "@angular/common";
import {TextFieldComponent} from "./components/text-field/text-field.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ButtonComponent, SidebarComponent, NavigationBarComponent, ToolbarComponent, FeatherModule, ToggleComponent, CdkMenuTrigger, CdkMenu, CdkMenuItem, NgIf, TextFieldComponent],
    templateUrl: './app.component.html',
    styles: `
        @import "../fonts.scss";

        .menu-background {
            background: var(--background-primary);
            backdrop-filter: blur(32px);
            -webkit-backdrop-filter: blur(32px);
            border-radius: 10px;
            box-shadow: 0 0px 32px rgba(0, 0, 0, 0.2);
            padding: 4px;
            min-width: 240px;
        }

        .menu-content {
            border-radius: 6px;
            overflow: hidden;
        }

        .menu-item {
            display: flex;
            align-items: center;
            padding: 4px 8px;
            min-height: 32px;
            color: var(--label-primary);
            @extend .body;
            font-size: 17;
            cursor: default;
            user-select: none;
            position: relative;
            margin: 0 2px;
            border-radius: 4px;
        }

        .label {
            margin-right: 16px;
            font-weight: 400;
        }

        .content {
            flex: 1;
        
        }
    `
})
export class AppComponent {
    title = 'apple-type';
    isDarkTheme = false;
    menuItems: MenuItem[] = [
        {
            id: 'Dashboard',
            title: 'Dashboard',
            type: 'section',
            isExpanded: true,
            children: [
                {
                    id: 'd-1',
                    title: 'Dashboard-1',
                    type: 'item',
                    link: '/dashboard',
                }
            ]
        },
        {
            id: 'Users',
            title: 'Users',
            type: 'item'
        },
        {
            id: 'Settings',
            title: 'Settings',
            type: 'item'
        },
        {
            id: 'Reports',
            title: 'Reports',
            type: 'item'
        }
    ]

    constructor() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.isDarkTheme = prefersDark;
        document.body.classList.toggle('dark', this.isDarkTheme);
    }

    toggleTheme() {
        this.isDarkTheme = !this.isDarkTheme;
        if (this.isDarkTheme) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }
}