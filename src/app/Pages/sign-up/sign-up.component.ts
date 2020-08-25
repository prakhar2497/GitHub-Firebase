import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private auth : AuthService,
              private router : Router,
              private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(data : NgForm){
    this.auth.signup(data.value.email, data.value.password).then(
      (res)=>{
        this.router.navigateByUrl('/home');
        this.toastr.success("Successfully Logged In");
      })
    .catch(
      (err) =>{
        console.log(err.message);
        this.toastr.error("Please try again");
      }
    );
  }
}
