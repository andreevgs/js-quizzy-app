import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";
import {DataSharingService} from "../services/data-sharing.service";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  currentLanguage: string;
  currentRoute: string;

  constructor(
    private translateService: TranslateService,
    private dataSharingService: DataSharingService,
    private router: Router
  ) {
    this.currentLanguage = this.translateService.currentLang;
    const segmentedUrl = this.router.url.split('/').filter(segment => segment !== '');
    this.currentRoute = segmentedUrl[1];
    if(['questions', 'tasks'].includes(this.currentRoute)){
      this.dataSharingService.setData(this.translateService.instant('pageNotFound.title'));
    }
  }
}
