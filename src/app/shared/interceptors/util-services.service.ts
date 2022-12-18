import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilServicesService {

  isloading$ = new Subject<boolean>();
  constructor() { }

  show(){
    this.isloading$.next(true);
  }
  hide(){
    this.isloading$.next(false);
  }

}
