import {Storage} from "@ionic/storage";

var currPoints = 300;

export function getPts(storage : Storage) : number{
  storage.get("points").then((val) => {
    if(val){
      currPoints = parseInt(val, 10);
    }
  });
  return currPoints;
}
export function incrementPts(amt : number, storage : Storage) : void{
  currPoints = getPts(storage) + amt;
  storage.set("points", currPoints.toString(10));
}
