import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/shared/services/scrolling.service';

@Component({
  selector: 'top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent {
  constructor(private scrollService: ScrollService) {}

  jumpToId(fragment) {
    this.scrollService.jumpToId(fragment);
  }
}
