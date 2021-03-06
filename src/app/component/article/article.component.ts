import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component ( {
  selector   : "app-article",
  templateUrl: "./article.component.html",
  styleUrls  : [ "./article.component.css" ]
} )
export class ArticleComponent implements OnInit {
  id : string;
  
  constructor ( private route : ActivatedRoute ) {
    this.route.params.subscribe (
      params => {
        this.id = params[ "id" ];
        console.log ( this.id );
      }
    );
  }
  
  ngOnInit () {
  }
  
}
