import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationService } from './services/application.service';
import { MessageModal } from 'src/shared/modals/message.modal';
import { ScrollService } from 'src/shared/services/scrolling.service';

@NgModule({
  imports: [CommonModule],
  declarations: [MessageModal],
  providers: [ApplicationService, ScrollService],
  entryComponents: [MessageModal]
})
export class SharedModule {}
