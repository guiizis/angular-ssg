import { Component, Input } from '@angular/core';
import { CarouselModule } from '@syncfusion/ej2-angular-navigations';
import { Post } from '../../types/post.type';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CarouselModule, ListViewModule, CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  @Input() post!: Post

}
