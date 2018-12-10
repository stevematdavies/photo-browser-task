import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  private imagesEndpoint = 'http://jsonplaceholder.typicode.com/photos';
  private usersEndpoint = 'http://jsonplaceholder.typicode.com/users';
  private albumsEndpoint = 'http://jsonplaceholder.typicode.com/albums';

  constructor(private httpClient: HttpClient) { }

  fetchImages(limit: number) {
    const q = limit > 0 ? `?_limit=${limit}` : '';
    return this.httpClient.get(`${this.imagesEndpoint}${q}`);
  }

  fetchImageRange(range) {
    const qStart = `?_start=${range.from}`;
    const qEnd = range.to > 0 && range.to > range.from ? `?&_end=${range.to}` : '';
    const q = `${qStart}${qEnd}`;
    return this.httpClient.get(`${this.imagesEndpoint}${q}`);
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
