import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SearchService } from './../../Services/search.service';


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit, OnChanges {
  @Input() repoUrl : string;
  repos = [];
  constructor(private search :  SearchService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    if(this.repoUrl){
      this.search.getRepos(this.repoUrl).subscribe(
        (repos: []) => {
          this.repos = repos
        },
        (err) =>{
          console.log(err);
        } 
      );
    }
  }

}
