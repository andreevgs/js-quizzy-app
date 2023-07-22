import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  currentLanguage: string;
  currentRoute: string;

  constructor(
    private translateService: TranslateService,
    private router: Router
  ) {
    this.currentLanguage = this.translateService.currentLang;
    const segmentedUrl = this.router.url.split('/').filter(segment => segment !== '');
    this.currentRoute = segmentedUrl[1];
  }
}
