import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SearchService {
//"https://api.github.com/users/prakhar"
//"https://api.github.com/users/prakhar/repos"
  constructor(private http : HttpClient) { }

  getUserDetails(userName: string){
    return this.http.get(`https://api.github.com/users/${userName}`);
  }

  getRepos(repoUrl: string){
    return this.http.get(repoUrl);
  }
}
