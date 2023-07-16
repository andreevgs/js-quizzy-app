import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangGuard implements CanActivate {
  constructor(private router: Router, private translateService: TranslateService) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const lang = route.paramMap.get('lang');
    try {

      if (lang && (lang === 'ru' || lang === 'en')) {
        await firstValueFrom(this.translateService.use(lang));
        return true;
      } else {
        throw new Error();
      }

    } catch (error) {
      const browserLang = navigator.language.split('-')[0];
      const detectedLang = browserLang.includes('ru') ? 'ru' : 'en';
      const path = state.url.split('/').filter(segment => segment !== '');
      let newUrl = `/${detectedLang}`;
      if(path.length){
        newUrl += `/${path.join('/')}`;
      }
      this.router.navigateByUrl(newUrl);
      return false;
    }
  }
}
