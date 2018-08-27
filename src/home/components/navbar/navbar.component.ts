import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/shared/services/scrolling.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private scrollService: ScrollService) {}

  ngOnInit() {}

  jumpToId(fragment) {
    this.scrollService.jumpToId(fragment);
  }
}
