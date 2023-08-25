import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DemoComponent } from './components/demo/demo.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { ExosCartV1Component } from './components/exos/exos-cart-v1/exos-cart-v1.component';
import { Demo5Component } from './components/demo/demo5/demo5.component';
import { ExosDirectiveComponent } from './components/exos/exos-directive/exos-directive.component';
import { TopPlayersComponent } from './components/demo/topPlayers/top-players.component';
import { ListArticleExosComponent } from './components/exos/exos-cart-v2/list-article-exos.component';
import { Demo7Component } from './components/demo/demo7/demo7.component';

const routes: Routes = [
  { path : 'home', component : HomeComponent},
  { path : 'about', component : AboutComponent},
  { path : 'demo', component : DemoComponent, children : [
      {path : 'demo1', component : Demo1Component},
      {path : 'demo2', component : Demo2Component},
      {path : 'demo3', component : Demo3Component},
      {path : 'demo4', component : Demo4Component},
      {path : 'demo5', component : Demo5Component},
      {path : 'inputoutput', component : TopPlayersComponent},
      {path : 'demo7', component : Demo7Component},
    ]
  },
  { path : "exoscartv1", component : ExosCartV1Component},
  { path : "exoscartv2", component : ListArticleExosComponent},
  { path : "exosdirective", component : ExosDirectiveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
