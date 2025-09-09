import { Routes } from '@angular/router';
import { Home } from './Component/home/home';
import { Latest } from './Component/latest/latest';
import { About } from './Component/about/about';
import { Contact } from './Component/contact/contact';
import { LatestCategory } from './Component/latest-category/latest-category';
import { Auther } from './Component/auther/auther';
import { LatestDetails } from './Component/latest-details/latest-details';

export const routes: Routes = [
  { path: "home", component: Home },
  { path: "latest", component: Latest },
  { path: "about", component: About },
  {path: "contact", component: Contact},
  { path: 'category/:title', component: LatestCategory },
  {path: 'author/:auther', component: Auther },
  { path: "latest/:id", component: LatestDetails },
  { path: "", redirectTo: "home", pathMatch: "full" }
];
