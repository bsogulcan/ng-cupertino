import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {allIcons, Camera, Github, Heart} from "angular-feather/icons";
import {FeatherModule} from "angular-feather";

@NgModule({
    declarations: [],
    imports: [
        FeatherModule.pick(allIcons)
    ],
    exports: [
        FeatherModule
    ]
})
export class IconsModule {
}
