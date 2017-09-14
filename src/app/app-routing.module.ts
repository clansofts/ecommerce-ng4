import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroTopComponent } from './heroes/hero-top/hero-top.component';
import { AppConfig } from './config/app.config';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MenuListXComponent } from './menu-list-x/menu-list-x.component';

const routes: Routes = [
  // {path: '', redirectTo: '/', pathMatch: 'full'},
  // {path: '', component: HeroTopComponent},
  { path: '', component: MenuListXComponent },
  {
    path: 'productdetail', component: ProductDetailComponent,
    children: [
      { path: '', component: MenuListXComponent },
      { path: ':id', component: ProductDetailComponent }
    ]
  },
  // {path: AppConfig.routes.heroes, loadChildren: './heroes/heroes.module#HeroesModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
