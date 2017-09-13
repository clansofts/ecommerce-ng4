import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from '../shared/services/home-service';

@Component({
  selector: 'app-menu-list-x',
  templateUrl: './menu-list-x.component.html',
  styleUrls: ['./menu-list-x.component.css']
})
export class MenuListXComponent implements OnInit {
  private dataList: any = [];  
  constructor(private homeService:HomeService,) { }

  ngOnInit() {
    this.componentService();
  }

  componentService() {
    this.homeService.getData().subscribe((data) =>{
      this.dataList = data;
      console.log(data);
    });
  }

}
