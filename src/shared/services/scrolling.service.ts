import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  jumpToId(fragment) {
    // Use the browser to navigate
    // window.location.hash = fragment;

    // But also scroll when routing / deep-linking to dynamic page
    // or re-clicking same anchor
    if (fragment) {
      const element = document.querySelector('#' + fragment);
      if (element) element.scrollIntoView();
    }
  }
}
