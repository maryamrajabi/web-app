import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'android-nav',
  templateUrl: './android-nav.component.html',
  styleUrls: ['./android-nav.component.scss']
})
export class AndroidNavComponent implements OnInit {
  right = this.sanitizer.bypassSecurityTrustStyle('calc(0% + 6px)');
  iconRight=this.sanitizer.bypassSecurityTrustStyle('calc(0% + 23px)');
  selectedItem = 0;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }
  changePosition(event) {
    console.log(event.pageX);
    console.log(event.clientX);
    console.log(event.screenX);
  }
  changeItem(index) {
    this.right = this.sanitizer.bypassSecurityTrustStyle('calc(' + index * 20 + '% + 6px)');
    this.iconRight = this.sanitizer.bypassSecurityTrustStyle('calc(' + index * 20 + '% + 23px)');
    this.selectedItem = index;
  }
}
