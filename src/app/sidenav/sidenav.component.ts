import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  currentLanguage: string;

  constructor(
    private translateService: TranslateService
  ) {
    this.currentLanguage = this.translateService.currentLang;
  }
}
