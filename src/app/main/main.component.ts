import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  currentLanguage: string;

  constructor(private translateService: TranslateService,) {
    this.currentLanguage = this.translateService.currentLang;
  }
}
