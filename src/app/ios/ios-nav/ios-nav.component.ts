import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../../infrastructure/services/nav.service';

@Component({
  selector: 'ios-nav',
  templateUrl: './ios-nav.component.html',
  styleUrls: ['./ios-nav.component.scss']
})
export class IosNavComponent implements OnInit {
  iconRight;
  isHide = false;

  @Input() selectedItem = 2;
  @HostBinding('style.display') display = 'block';
  constructor(private _router: Router, private _navService: NavService) {
    this._navService.subscribeMode((response: any) => {
      this.isHide = response.isHide;
      this.display = this.isHide ? 'none' : 'block';
    });
  }

  ngOnInit() {
  }
 
  changeItem(link, index) {
    this.selectedItem = index;
    this._router.navigate([link]);
  }
}
