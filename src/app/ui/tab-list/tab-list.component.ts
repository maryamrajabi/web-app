import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'tab-list',
    templateUrl: './tab-list.component.html',
    styleUrls: ['./tab-list.component.scss']
})
export class TabListComponent implements OnInit {
    @Input() tabs;

    constructor() {
    }

    ngOnInit() {
    }

}
