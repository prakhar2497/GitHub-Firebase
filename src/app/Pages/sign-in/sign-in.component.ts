import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private auth : AuthService,
    private router : Router,
    private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(data : NgForm){
    this.auth.signin(data.value.email, data.value.password).then(
      (res)=>{
        this.router.navigateByUrl('/');
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
