import { Component } from '@angular/core';
import { ScrollService } from 'src/shared/services/scrolling.service';

@Component({
  selector: 'pic-dialog',
  templateUrl: './pic-dialog.component.html',
  styleUrls: ['./pic-dialog.component.scss']
})
export class PicDialogComponent {
  constructor(private scrollService: ScrollService) {}

  jumpToId(fragment) {
    this.scrollService.jumpToId(fragment);
  }
}
