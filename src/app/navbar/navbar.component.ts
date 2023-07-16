import {Component} from '@angular/core';
import {ThemeService} from "../common/services/theme.service";
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  currentTheme: string;
  currentLanguage: string;

  constructor(
    private themeService: ThemeService,
    private translateService: TranslateService,
    private router: Router
  ) {
    this.currentTheme = this.themeService.getTheme();
    this.currentLanguage = this.translateService.currentLang;
  }

  toggleTheme(): void {
    const theme = this.currentTheme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    this.themeService.setTheme(theme);
    this.currentTheme = theme;
  }

  switchLanguage(lang: string): void {
    const segmentedUrl = this.router.url.split('/').filter(segment => segment !== '');
      segmentedUrl[0] = lang;
      window.location.href = segmentedUrl.join('/');
  }
}
