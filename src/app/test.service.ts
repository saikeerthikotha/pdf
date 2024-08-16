import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get(`https://www.hq.nasa.gov/alsj/a17/A17_FlightPlan.pdf`,
      { responseType: "arraybuffer", observe: "response" }
    );
  }
}
