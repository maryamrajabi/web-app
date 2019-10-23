import {Component, OnInit} from '@angular/core';
import {DetectDeviceService} from './infrastructure/services/detect-device.service';
import {Router, RouterOutlet} from '@angular/router';
import {fader} from './route-animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        fader
    ]
})
export class AppComponent implements OnInit {
    title = 'ufarm-pwa';

    constructor(private _deviceDetectorService: DetectDeviceService,
                private _router: Router) {
        this._deviceDetectorService.deviceConnect();
        this._deviceDetectorService.deviceType().subscribe((success) => {
            console.log(success);
            this._router.navigate([success]);
        }, (error) => {
            console.log(error);
        });
    }

    ngOnInit() {
    }

    prepareRoute(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
}
