import { Component, OnInit } from '@angular/core';
import {Storage} from "@ionic/storage";
import {incrementPts} from "../points"

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {
  constructor(private storage : Storage ) {
  }
  ngOnInit(){}
  ionViewWillEnter(){
    incrementPts(5, this.storage);
  }

}
