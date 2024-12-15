import { Component, Input } from '@angular/core';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { PostsComponent } from '../posts/posts.component';
import { Post } from '../../types/post.type';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [ListViewModule, PostsComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent {

  @Input() posts!: Post[];

}
