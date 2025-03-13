import { Injectable } from '@angular/core';

@Injectable()
export class MyService {
  constructor(private http: HttpClient) {}

  getData(): Promise<any> {
    return this.http.get('https://example.com/data');
  }
}