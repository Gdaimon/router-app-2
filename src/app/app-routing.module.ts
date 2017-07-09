import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArticleComponent } from "./component/article/article.component";
import { PageNotFoundComponent } from "./component/page-not-found/page-not-found.component";
import { View1Component } from "./component/view1/view1.component";
import { View2Component } from "./component/view2/view2.component";

const routes : Routes = [
  {
    path     : "view1",
    component: View1Component
  },
  {
    path     : "",
    component: View1Component,
    pathMatch: "full"
  },
  {
    path     : "view2",
    component: View2Component
  },
  {
    path     : "article/:id",
    component: ArticleComponent
  },
  {
    path     : "**",
    component: PageNotFoundComponent
  }
];

@NgModule ( {
  imports: [ RouterModule.forRoot ( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule {
}
