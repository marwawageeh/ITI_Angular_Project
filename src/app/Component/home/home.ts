import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LatestModel } from '../../Models/latest-model';
import { LatestService } from '../../Service/latest-service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  latestlist: LatestModel[];

  constructor(private latestService: LatestService) {
    this.latestlist = this.latestService.getAll();
  }

}
