import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig } from '../config/app.config';

@Component({
  selector: 'app-product-list-x',
  templateUrl: './product-list-x.component.html',
  styleUrls: ['./product-list-x.component.css']
})
export class ProductListXComponent implements OnInit {
  @Input() dataList: Array<any> = [];
  @Input() title: string = '';

  private section_1: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openProductDetail(_id){
    // this.router.navigate([AppConfig.routes.heroes + '/' + _id]);
    this.section_1 = false;
    this.router.navigate(['/productdetail']);
  }

}
