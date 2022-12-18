import { Component, OnInit } from '@angular/core';
import { UtilServicesService } from '../../../interceptors/util-services.service';

@Component({
  selector: 'Loaderhtml',
  templateUrl: './loadercomponent.component.html',
  styleUrls: ['./loadercomponent.component.scss']
})
export class LoadercomponentComponent implements OnInit {


  isloading$ = this.spinerservice.isloading$;
  
  constructor( private spinerservice: UtilServicesService ) { }

 
  ngOnInit(): void {
  }

}
