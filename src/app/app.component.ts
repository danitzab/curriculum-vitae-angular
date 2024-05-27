import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  langs: string[] = [];
  currentLanguage = 'spanish';
  shortFormat = false;

  constructor(
    private translate: TranslateService, // private route: ActivatedRoute,
  ) {
    this.translate.setDefaultLang('spanish');
    this.translate.use(this.currentLanguage);
    this.translate.addLangs(['english', 'spanish']);
    this.langs = this.translate.getLangs();
    // this.isCanadaFormat = this.route.snapshot.queryParams.canada;
    // console.log('this.isCanadaFormat', this.isCanadaFormat);
  }

  ngOnInit() {
    // this.route.queryParams.subscribe((params) => {
    //   console.log(params); // { orderby: "price" }
    // });
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
