import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from '../../Models/post';
import { Contact } from "../contact/contact";
import { PostService } from '../../Service/post-service';

@Component({
  selector: 'app-about',
  imports: [Contact, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getAllPosts().subscribe(data => {
      this.posts = data.slice(0, 10);
    });
  }

}
