import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  currentLanguage: string;

  constructor(
    private translateService: TranslateService
  ) {
    this.currentLanguage = this.translateService.currentLang;
  }
}
