import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ExcelService} from '../services/excel.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   public data: any;
  constructor(private http: HttpClient,private excelService:ExcelService) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(posts => {
     this.data = posts;
     console.log(this.data); // this.Posts conatins array of objects..
     });
  }
  exportAsXLSX(): void {
   this.excelService.exportAsExcelFile(this.data, 'keshav');
 }
}
