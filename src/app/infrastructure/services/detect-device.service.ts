import {Injectable} from '@angular/core';
import {Subject, Observable, BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DetectDeviceService {

    private deviceType$: BehaviorSubject<any> = new BehaviorSubject<any>(10);// Subject<string>();

    constructor() {
    }

    deviceType(): Observable<any> {
        return this.deviceType$.asObservable();
    }

    deviceConnect() {
        var userAgent = navigator.userAgent || navigator.vendor;
        // console.log(navigator);
        if (/windows phone/i.test(userAgent)) {
            // return "Windows Phone";
            this.deviceType$.next('windows-phone');
            console.log('windows-phone');
        }

        else if (/android/i.test(userAgent)) {
            // return "Android";
            this.deviceType$.next('android');
            console.log('android');
        }

        else if (/iPad|iPhone|iPod/.test(userAgent)) {
            // return "iOS";
            this.deviceType$.next('ios');
            console.log('ios');
        }

        else {
            this.deviceType$.next('unknown');
            console.log('unknown');
        }

    }
}
