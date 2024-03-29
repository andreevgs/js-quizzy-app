import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {DataSharingService} from "../common/services/data-sharing.service";
import {MatDrawer} from "@angular/material/sidenav";

@Component({
  selector: 'app-navigation-drawer',
  templateUrl: './navigation-drawer.component.html',
  styleUrls: ['./navigation-drawer.component.scss']
})
export class NavigationDrawerComponent implements OnInit {
  receivedData: string | null = null;
  private subscription: Subscription;
  currentRoute: string;
  isDrawerOpened: boolean = false;

  constructor(private router: Router, private dataSharingService: DataSharingService) {
    const segmentedUrl = this.router.url.split('/').filter(segment => segment !== '');
    this.currentRoute = segmentedUrl[2];
    this.subscription = this.dataSharingService.data$.subscribe((data) => {
      this.receivedData = data;
    });
  }
  toggleDrawer(drawer: MatDrawer) {
    if (this.isDrawerOpened) {
      document.querySelector('app-default')?.classList.remove('lock-scroll');
      this.isDrawerOpened = false;
    } else {
      document.querySelector('app-default')?.classList.add('lock-scroll');
      this.isDrawerOpened = true;
    }
    drawer.toggle();
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const segmentedUrl = this.router.url.split('/').filter(segment => segment !== '');
        this.currentRoute = segmentedUrl[2];
      }
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
