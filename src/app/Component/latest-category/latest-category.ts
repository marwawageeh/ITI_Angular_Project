import { Component } from '@angular/core';
import { LatestModel } from '../../Models/latest-model';
import { ActivatedRoute } from '@angular/router';
import { LatestService } from '../../Service/latest-service';

@Component({
  selector: 'app-latest-category',
  imports: [],
  templateUrl: './latest-category.html',
  styleUrl: './latest-category.css'
})
export class LatestCategory {

  title!: string;
  filteredList: LatestModel[] = [];

  constructor(private route: ActivatedRoute, private latestService: LatestService) {}

  ngOnInit(): void {
    this.title = this.route.snapshot.paramMap.get('title') || '';

    this.filteredList = this.latestService.getAll().filter(item => item.title === this.title);
  }
}
