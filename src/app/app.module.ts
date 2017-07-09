import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View1Component } from './component/view1/view1.component';
import { View2Component } from './component/view2/view2.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ArticleComponent } from './component/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component,
    PageNotFoundComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
