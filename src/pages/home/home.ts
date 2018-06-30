import { Component } from '@angular/core';
import { MenuController, App } from 'ionic-angular';
import { ProfilePage } from './../profile/profile';
import { DetailPage } from './../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab2Root = DetailPage;
  tab3Root = ProfilePage;
  constructor() {
  }

}
