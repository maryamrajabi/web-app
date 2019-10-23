import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ios-profile',
  templateUrl: './ios-profile.component.html',
  styleUrls: ['./ios-profile.component.scss']
})
export class IosProfileComponent implements OnInit {
  listItem = [
    { icon: "assets/icons/ice1.png", link: "/ios/tracking-orders", text: "پیگیری سفارشات" },
    { icon: "assets/icons/ice2.png", link: "", text: "پیام ها" },
    { icon: "assets/icons/ice3.png", link: "", text: "مرکز پیام (آموزش و راهنمایی)" },
    { icon: "assets/icons/ice4.png", link: "", text: "امتیاز به اپلیکیشن یوفارم" },
    { icon: "assets/icons/ice5.png", link: "", text: "نظرات و پیشنهادات" },
    { icon: "assets/icons/ice6.png", link: "", text: "قوانین،شرایط و تضمین ها" },
    { icon: "assets/icons/ice7.png", link: "", text: "علاقه مندی ها" }
  ];
  constructor(private _router: Router, private _location: Location) { }

  ngOnInit() {
  }
  navigate(link) {
    this._router.navigate([link]);
  }
  back() {
    this._location.back();
  }
}
