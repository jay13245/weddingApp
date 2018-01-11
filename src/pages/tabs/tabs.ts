import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { AshishPage } from '../ashish/ashish';
import { DatesPage } from '../dates/dates';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = AshishPage;
  tab4Root = DatesPage;
  tab5Root = ContactPage;

  constructor() {

  }
}
