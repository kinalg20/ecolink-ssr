import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../Services/api-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  remembertoken: any;
  constructor(private scroller: ViewportScroller, private route: ActivatedRoute, private router: Router, private _apiService: ApiServiceService) { }

  ngOnInit(): void {}

  scrolldown(event: any) {
    this.scroller.scrollToAnchor("newsletter");
  }

}
