import {Component, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import {trigger, state, style, transition, animate} from "@angular/animations";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {
  @ViewChild('containerSelector', {read: ElementRef})
  containerSelector: ElementRef;

info: string;
maxScrollLeft: number;

  constructor() {

    this.info = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
      'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea' +
      ' commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.maxScrollLeft = this.containerSelector.nativeElement.scrollWidth - this.containerSelector.nativeElement.clientWidth;
  }

  public onNextSearchPosition(objetivo: number): void {

    this.maxScrollLeft = this.containerSelector.nativeElement.scrollWidth - this.containerSelector.nativeElement.clientWidth;
    if (this.containerSelector.nativeElement.scrollLeft < objetivo) {
      let i = this.containerSelector.nativeElement.scrollLeft;
      const init = setInterval(() => {
        this.containerSelector.nativeElement.scrollTo(i, 0);
        i += 5;
        if (i > this.maxScrollLeft - 15) {
          clearInterval(init);
        }
      }, 10);
    } else if (this.containerSelector.nativeElement.scrollLeft > objetivo) {
      let i = this.containerSelector.nativeElement.scrollLeft;
      const init = setInterval(() => {
        this.containerSelector.nativeElement.scrollTo(i, 0);
        i -= 5;
        if (i < objetivo + 15) {
          clearInterval(init);
        }
      }, 10);
    }
    console.log(this.containerSelector.nativeElement.scrollLeft + ' Scroll total: ' + this.maxScrollLeft);
  //  this.containerSelector.nativeElement.scrollLeft = 350;

   // this.containerSelector.nativeElement.scrollTo(350, 0);
  }


}
