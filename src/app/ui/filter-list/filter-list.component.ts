import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent implements OnInit {
  @Input() data;
  isOpen = false;
  searchKey = '';
  list = [
    { id: 1, text: 'مرغ' },
    { id: 2, text: 'تخم مرغ' },
    { id: 3, text: 'شتر مرغ' },
  ]
  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.isOpen = !this.isOpen;
  }
  getData() {
    return this.data.attribute_values.filter(x => x.value.includes(this.searchKey));

  }
}
