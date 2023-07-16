import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient) {
  const baseUrl = document.baseURI;
  return baseUrl.includes('github.io') ?
    new TranslateHttpLoader(http, '/js-quizzy-app/assets/i18n/') :
    new TranslateHttpLoader(http);
}
