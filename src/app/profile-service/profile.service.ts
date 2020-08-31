import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid = '';
  private clientsecret = '7871ef101330ff7a6670ef9d082eef2f8c94e99c';

  constructor(private http: HttpClient) {
    console.log("service is now ready");
    this.username = "shalomodida";
  }
  getProfileInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  }
  getProfileRepos() {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);

  }
  updateProfile(username: string) {
    this.username = username;
  }
}