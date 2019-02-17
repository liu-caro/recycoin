import { Component, OnInit } from '@angular/core';
import {Storage} from "@ionic/storage";
import {getPts} from "../points"

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {
    ngOnInit(){}
    constructor(private storage : Storage ) {
    }
    ionViewWillEnter() {
      let pts = getPts(this.storage);
      document.getElementById("scorehere").innerHTML = pts.toString();
      document.getElementById("bottleshere").innerHTML = (pts / 5).toString();
    }

}
