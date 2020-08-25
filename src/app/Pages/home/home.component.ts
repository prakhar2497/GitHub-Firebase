import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/Services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName : string;
  user = null;
  error = null;
  constructor(private search : SearchService) { }

  ngOnInit(): void {
  }
  findUser(){
    this.search.getUserDetails(this.userName).subscribe(
      (user) => {
        this.user = user;
        this.error = null;
      },
      (err) =>{
        this.user = null;
        this.error = 'User Not Found';
      }

    )
  }

}
