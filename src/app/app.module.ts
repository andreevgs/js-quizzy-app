import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {QaListComponent} from './qa-list/qa-list.component';
import {MainComponent} from './main/main.component';
import {NavbarComponent} from './navbar/navbar.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatChipsModule} from "@angular/material/chips";
import {MatExpansionModule} from "@angular/material/expansion";
import {MarkdownModule} from "ngx-markdown";
import {HighlightModule} from "ngx-highlightjs";
import {CommonModule} from "./common/common.module";
import {MatTooltipModule} from "@angular/material/tooltip";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpLoaderFactory} from "./common/factories/translation-loader.factory";
import {DefaultComponent} from './default/default.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatRadioModule} from "@angular/material/radio";

@NgModule({
  declarations: [
    AppComponent,
    QaListComponent,
    MainComponent,
    NavbarComponent,
    DefaultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    MatChipsModule,
    MatExpansionModule,
    HighlightModule,
    CommonModule,
    MatTooltipModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    }),
    MatMenuModule,
    MatRadioModule
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
