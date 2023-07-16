import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {MatChipSelectionChange} from "@angular/material/chips";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-qa-list',
  templateUrl: './qa-list.component.html',
  styleUrls: ['./qa-list.component.scss']
})
export class QaListComponent implements OnInit {
  title: string = '';
  qaListData: any[] = [];
  selectedFilters: string[] = ['Junior', 'Middle', 'Senior'];

  constructor(private http: HttpClient, private route: ActivatedRoute, private translateService: TranslateService) { }

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

  ngOnInit(): void {
    const currentRoute = this.route.snapshot.url.toString();
    this.title = currentRoute.charAt(0).toUpperCase() + currentRoute.slice(1);
    const jsonFilePath = `https://github.com/andreevgs/js-quizzy-app/blob/master/src/pages/${currentRoute}/${this.getCurrentLanguage()}/${currentRoute}.json`;

    this.http.get(jsonFilePath).subscribe((data: any) => {
      this.qaListData = data;
    });
  }
}
