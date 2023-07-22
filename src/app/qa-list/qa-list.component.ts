import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {MatChipSelectionChange} from "@angular/material/chips";
import {TranslateService} from "@ngx-translate/core";
import {DataSharingService} from "../common/services/data-sharing.service";

@Component({
  selector: 'app-qa-list',
  templateUrl: './qa-list.component.html',
  styleUrls: ['./qa-list.component.scss']
})
export class QaListComponent implements OnInit {
  title: string = '';
  qaListData: any[] = [];
  selectedFilters: string[] = ['Junior', 'Middle', 'Senior'];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private translateService: TranslateService,
    private dataSharingService: DataSharingService
  ) { }

  getCurrentLanguage() {
    return this.translateService.currentLang;
  }

  filterSelectionChange(selectionChange: MatChipSelectionChange) {
    if(selectionChange.selected && selectionChange.isUserInput){
      this.selectedFilters.push(selectionChange.source.value);
    } else {
      if(this.selectedFilters.length > 1){
        const index = this.selectedFilters.indexOf(selectionChange.source.value);
        if(index > -1) this.selectedFilters.splice(index, 1);
      } else {
        selectionChange.source.selected = true;
      }
    }
  }

  sendDataToNavigationDrawer(data: string | null) {
    this.dataSharingService.setData(data);
  }

  ngOnInit(): void {
    const currentRoute = this.route.snapshot.url.toString();
    console.log(currentRoute)
    this.title = currentRoute.charAt(0).toUpperCase() + currentRoute.slice(1);
    const jsonFilePath = `https://raw.githubusercontent.com/andreevgs/js-quizzy-app/master/pages/${currentRoute}/${this.getCurrentLanguage()}/${currentRoute}.json`;

    this.http.get(jsonFilePath).subscribe((data: any) => {
      this.qaListData = data;
      const title = `${this.qaListData.length} ${this.translateService.instant('sidenav.' + currentRoute)} ${this.translateService.instant('list.title')}`;
      this.sendDataToNavigationDrawer(title);
    });
  }

  ngOnDestroy(): void {
    this.sendDataToNavigationDrawer(null);
  }
}
