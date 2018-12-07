import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  private imagesEndpoint = 'http://jsonplaceholder.typicode.com/photos';
  private usersEndpoint = 'http://jsonplaceholder.typicode.com/users';
  private albumsEndpoint = 'http://jsonplaceholder.typicode.com/albums';

  constructor(private httpClient: HttpClient) { }

  fetchImages() {
    return this.httpClient.get(this.imagesEndpoint);
  }
}
