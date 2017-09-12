import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-list-x',
  templateUrl: './menu-list-x.component.html',
  styleUrls: ['./menu-list-x.component.css']
})
export class MenuListXComponent implements OnInit {
  private bestSeller: Array<any> = [{
    name: 'Smart Watch นาฬิกาบลูทูธมีกล้อง ใส่ซิมได้ รุ่น A8 (สีดำ)',
    price: 790,
    img:'https://th-live-01.slatic.net/p/2/smart-watch-a8-1487672241-61876421-f2b1df699088fe01b50bf76c84ca03a9-webp-zoom.jpg'
  },{
    name: 'Smart Watch นาฬิกาบลูทูธมีกล้อง ใส่ซิมได้ รุ่น A8 (สีดำ)',
    price: 790,
    img:'https://th-live-03.slatic.net/p/2/dell-27-led-monitor-se2717hhdmivga-1474533809-5604738-afda444721bf3543b545be34df66cb24-webp-zoom.jpg'
  },{
    name: 'Smart Watch นาฬิกาบลูทูธมีกล้อง ใส่ซิมได้ รุ่น A8 (สีดำ)',
    price: 790,
    img:'https://th-live-02.slatic.net/p/2/aoc-i2781fh-led-monitor-27-ips-black-1448273884-6898233-1-webp-zoom.jpg'
  },{
    name: 'Smart Watch นาฬิกาบลูทูธมีกล้อง ใส่ซิมได้ รุ่น A8 (สีดำ)',
    price: 790,
    img:'https://th-live-01.slatic.net/p/2/nubwo-raiden-game-mouse-nm-68-1470730917-6805277-8d7f412336787c76f095bad57b69d6e5-webp-zoom.jpg'
  },{
    name: 'Smart Watch นาฬิกาบลูทูธมีกล้อง ใส่ซิมได้ รุ่น A8 (สีดำ)',
    price: 790,
    img:'https://th-live-02.slatic.net/p/2/hp-24es-ips-led-display-silver-1468307675-4644527-7cdccf6555808b92ae1b7a1d9a8b1944-webp-zoom.jpg'
  }];

  constructor() { }

  ngOnInit() {
  }

}
