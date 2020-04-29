import { Component, OnInit } from '@angular/core';

    
import { User } from '../user';

//declare var $:any;
import { EnrollmentService } from '../enrollment.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
  
})
export class DashboardComponent implements OnInit {
  errorMsg = '';

 public foods;

  
  constructor(private _enrollmentService: EnrollmentService,private router:Router){}
  showfood()
  {
    this._enrollmentService.getFoods().subscribe(
      data=>{this.foods=data},
      err => console.error(err),
         () => console.log('done loading foods')

    );
    
  }
  
  ngOnInit() {
    
    this.showfood() ;
    this.alertfun();
   

      
    }

  alertfun():any{
   
      //$("#myDropdown").css({"display": "block","color":"blue"});
     
    
    
 
  }
 onSubmit() {
   
    
    this.router.navigate(['profile'])//where it shpuld go after register
  }

}

