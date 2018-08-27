import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationService } from 'src/shared/services/application.service';
import { MessageModal } from 'src/shared/modals/message.modal';
import { ScrollService } from '../../../shared/services/scrolling.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  constructor(
    private applicationService: ApplicationService,
    private modalService: NgbModal,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {}

  onCreate(event) {
    // console.log('container', event);
    this.applicationService.create(event).then(ref => {
      console.log('ok', ref);
      const modalRef = this.modalService.open(MessageModal);
      modalRef.componentInstance.title = 'ধন্যবাদ!!';
      modalRef.componentInstance.message =
        'আপনার আবেদনটি আমাদের সার্ভারে জমা হয়েছে। আমরা যতদ্রুত সম্ভব আপনার আবেদনটি প্রসেস শুরু করব। ধন্যবাদ। ';
    });
  }

  jumpToId(fragment) {
    this.scrollService.jumpToId(fragment);
  }
}
