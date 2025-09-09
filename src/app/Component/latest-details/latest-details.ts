import { Component } from '@angular/core';
import { LatestModel } from '../../Models/latest-model';
import { ActivatedRoute } from '@angular/router';
import { LatestService } from '../../Service/latest-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-latest-details',
  imports: [CommonModule],
  templateUrl: './latest-details.html',
  styleUrls: ['./latest-details.css']
})
export class LatestDetails {

  post!: LatestModel | undefined;
  latestlist: LatestModel[]

  constructor(private route: ActivatedRoute, private latestService: LatestService)
  {
    this.latestlist = this.latestService.getAll();
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.latestService.getAll().find(p => p.id === id);

  }


}
