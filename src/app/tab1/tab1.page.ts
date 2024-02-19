import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.fadeIn();
    }, 1000);
  } 

  ngOnDestroy() {
    console.log('Tab1Page destroyed');
  }

  fadeIn() {
    const element = document.getElementById('card');
    if (element) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  }

}
