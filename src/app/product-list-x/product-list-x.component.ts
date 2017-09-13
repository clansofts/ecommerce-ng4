import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-list-x',
  templateUrl: './product-list-x.component.html',
  styleUrls: ['./product-list-x.component.css']
})
export class ProductListXComponent implements OnInit {
  @Input() dataList: Array<any> = [];
  @Input() title: string = '';

  constructor() { }

  ngOnInit() {
  }

}
