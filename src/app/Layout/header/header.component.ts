import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../Services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email = null;
  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router) {
    this.auth.getUser().subscribe(
      (user) => {
        this.email = user.email;
      })
  }

  ngOnInit(): void {
  }

  async handleSignOut() {
    try {
      const res = await this.auth.signout();
      this.router.navigateByUrl('/signin');
      this.toastr.info('Please login again to continue');
      this.email = null;
    }
    catch{
      this.toastr.error('Oops, something went wrong.');
    }
  }

}
