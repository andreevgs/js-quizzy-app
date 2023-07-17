import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main/main.component";
import {QaListComponent} from "./qa-list/qa-list.component";
import {LangGuard} from "./common/guards/lang.guard";
import {DefaultComponent} from "./default/default.component";
import {PageNotFoundComponent} from "./common/page-not-found/page-not-found.component";
import {NavigationDrawerComponent} from "./navigation-drawer/navigation-drawer.component";


const routes: Routes = [
  {path: '', redirectTo: '//', pathMatch: 'full'},
  {
    path: ':lang',
    canActivate: [LangGuard],
    component: DefaultComponent,
    children: [
      {
        path: '', pathMatch: 'full',
        component: MainComponent,
      },
      {
        path: 'questions',
        component: NavigationDrawerComponent,
        children: [
          {path: '', redirectTo: 'javascript', pathMatch: 'full'},
          {path: 'javascript', component: QaListComponent},
          {path: '**', component: PageNotFoundComponent},
        ]
      },
      {
        path: 'tasks',
        component: NavigationDrawerComponent,
        children: [
          {path: '', redirectTo: 'javascript', pathMatch: 'full'},
          {path: 'javascript', component: QaListComponent},
          {path: '**', component: PageNotFoundComponent},
        ]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LangGuard]
})
export class AppRoutingModule {

}
