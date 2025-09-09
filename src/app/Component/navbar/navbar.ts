import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {

}
