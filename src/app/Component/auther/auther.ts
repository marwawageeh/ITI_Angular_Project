import { Component } from '@angular/core';
import { LatestModel } from '../../Models/latest-model';
import { ActivatedRoute } from '@angular/router';
import { LatestService } from '../../Service/latest-service';

@Component({
  selector: 'app-auther',
  imports: [],
  templateUrl: './auther.html',
  styleUrl: './auther.css'
})
export class Auther {

  authorName!: string;
  authorPosts: LatestModel[] = [];

  constructor(private route: ActivatedRoute, private latestService: LatestService) {}

  ngOnInit(): void {
    this.authorName = this.route.snapshot.paramMap.get('auther')!;
    this.authorPosts = this.latestService.getAll().filter(p => p.Auther === this.authorName);
  }
}
