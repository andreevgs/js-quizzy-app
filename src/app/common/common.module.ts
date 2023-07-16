import {NgModule} from '@angular/core';
import {ThemeService} from "./services/theme.service";
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from "@angular/router";

@NgModule({
  providers: [
    ThemeService,
  ],
  imports: [
    TranslateModule,
    RouterModule
  ],
  declarations: [
    PageNotFoundComponent
  ]
})
export class CommonModule {
}
