import { User } from './../models/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
apiUrl = 'https://sheet.best/api/sheets/2a758742-e709-42a1-8f1e-2d698379ec81';
  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json'
    })
  }
  constructor(private HttpClient: HttpClient) { }

  //Retorna a lista de usuários READ
  getUsers(): Observable<User[]> {
    return this.HttpClient.get<User[]>(this.apiUrl)
  }
  
  //Salva usuario no banco

  postUser(user: User ): Observable<User> {
    return this.HttpClient.post<User>(this.apiUrl, user, this.httpOptions)
  }
}
