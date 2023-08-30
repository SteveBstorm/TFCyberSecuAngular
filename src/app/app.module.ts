import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DemoComponent } from './components/demo/demo.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { EurToBtcPipe } from './shared/eur-to-btc.pipe';
import { PowerPipe } from './shared/power.pipe';
import { JhmsPipe } from './shared/jhms.pipe';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { ExosCartV1Component } from './components/exos/exos-cart-v1/exos-cart-v1.component';
import { MamyPipe } from './components/exos/exos-cart-v1/mamy.pipe';
import { Demo5Component } from './components/demo/demo5/demo5.component';
import { HighlightDirective } from './components/demo/demo5/highlight.directive';
import { HighlightDynamicsDirective } from './components/demo/demo5/highlight-dynamics.directive';
import { ExosDirectiveComponent } from './components/exos/exos-directive/exos-directive.component';
import { TrimerDirective } from './components/exos/exos-directive/trimer.directive';
import { PlayerComponent } from './components/demo/topPlayers/player/player.component';
import { TopPlayersComponent } from './components/demo/topPlayers/top-players.component';
import { ListArticleExosComponent } from './components/exos/exos-cart-v2/list-article-exos.component';
import { SystemAddArticleComponent } from './components/exos/exos-cart-v2/system-add-article/system-add-article.component';
import { ArticleComponent } from './components/exos/exos-cart-v2/article/article.component';
import { Demo7Component } from './components/demo/demo7/demo7.component';
import { ExosCartV3Component } from './components/exos/exos-cart-v3/exos-cart-v3.component';
import { ListeComponent } from './components/exos/exos-cart-v3/liste/liste.component';
import { Demo8Component } from './components/demo/demo8/demo8.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DemoComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    EurToBtcPipe,
    PowerPipe,
    JhmsPipe,
    Demo4Component,
    ExosCartV1Component,
    ListArticleExosComponent,
    MamyPipe,
    Demo5Component,
    HighlightDirective,
    HighlightDynamicsDirective,
    ExosDirectiveComponent,
    TrimerDirective,
    TopPlayersComponent,
    PlayerComponent,
    SystemAddArticleComponent,
    ArticleComponent,
    Demo7Component,
    ExosCartV3Component,
    ListeComponent,
    Demo8Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
