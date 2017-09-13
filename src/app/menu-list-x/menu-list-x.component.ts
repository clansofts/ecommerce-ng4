import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from '../shared/services/home-service';

@Component({
  selector: 'app-menu-list-x',
  templateUrl: './menu-list-x.component.html',
  styleUrls: ['./menu-list-x.component.css']
})
export class MenuListXComponent implements OnInit {
  private dataList: any = [];
  tiles = [
    {text: '1', cols: 1, rows: 2, color: 'url(https://th-live.slatic.net/original/4719a77d0ec6712ba0955129a11c104b.jpg)'},    
    {text: '2', cols: 3, rows: 1, color: 'url(https://th-live.slatic.net/original/3bc6582496c8fbda4fbcdb90ed7686a9.jpg)'},
    {text: '3', cols: 1, rows: 1, color: 'url(https://th-live.slatic.net/original/4129e6e868701b3dd9de40671d639713.jpg)'},
    {text: '4', cols: 2, rows: 1, color: 'url(https://th-live.slatic.net/original/25398969b95cd25a3ab686d5eeddc6ba.jpg)'},
  ];
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
