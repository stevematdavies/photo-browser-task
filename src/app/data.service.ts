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

  fetchAlbum(albumId: number) {
    return this.httpClient.get(`${this.albumsEndpoint}/${albumId}`);
  }

  fetchUser(userId: number) {
    return this.httpClient.get(`${this.usersEndpoint}/${userId}`);
  }

  fetchUsersForAlbum(albumId: number) {
    return this.httpClient.get(`${this.usersEndpoint}/?albumId=${albumId}`);
  }

  fetchAlbumsForUser(userId: number) {
    return this.httpClient.get(`${this.albumsEndpoint}/?userId=${userId}`);
  }

  linkToAlbum(id: number) {
    window.location.href = `${this.albumsEndpoint}/${id}`;
  }

  linkToImage(id: number) {
    window.location.href = `${this.imagesEndpoint}/${id}`;
  }

}
