import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main/main.component";
import {QaListComponent} from "./qa-list/qa-list.component";
import {LangGuard} from "./common/guards/lang.guard";
import {DefaultComponent} from "./default/default.component";
import {PageNotFoundComponent} from "./common/page-not-found/page-not-found.component";

const mainSegment = document.baseURI.includes('github.io') ? 'js-quizzy-app' : '';
const langSegment = document.baseURI.includes('github.io') ? 'js-quizzy-app/:lang' : ':lang';

const routes: Routes = [
  {path: '', redirectTo: '//', pathMatch: 'full'},
  {
    path: ':lang',
    canActivate: [LangGuard],
    component: DefaultComponent,
    children: [
      {path: '', component: MainComponent},
      {path: 'javascript', component: QaListComponent},
      {path: '**', component: PageNotFoundComponent},
    ]
  },
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LangGuard]
})
export class AppRoutingModule {

}
