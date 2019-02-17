import { Component, OnInit } from '@angular/core';
import {Storage} from "@ionic/storage";
import {incrementPts} from "../points"

@Component({
  selector: 'app-fail',
  templateUrl: './fail.page.html',
  styleUrls: ['./fail.page.scss'],
})
export class FailPage implements OnInit {
  constructor(private storage : Storage ) {
  }
  ngOnInit(){}
  ionViewWillEnter() {
    incrementPts(-10, this.storage);
  }

}
