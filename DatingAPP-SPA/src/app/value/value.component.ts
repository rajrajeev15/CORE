import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

 value: any;
 title = 'Dating App';
 constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }


  getValues() {
    this._http.get('http://localhost:5000/api/values').subscribe(response => {this.value = response; }, error => {
      console.log(error); });

  }
}
