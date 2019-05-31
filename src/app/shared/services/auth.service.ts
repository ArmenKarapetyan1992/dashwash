import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "localhost"
  constructor(private httpClient: HttpClient) { 

  }
  login(formData) {
    return this.httpClient.post(`${this.url}/auth/login`, formData);
}
}
