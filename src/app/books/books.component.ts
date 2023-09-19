import { Component, OnInit } from '@angular/core';
import { BookManagerDataService } from '../data.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  rowData: any[] = [];

  columnDefs = [
    { headerName: 'Book Name', field: 'bookName' },
    { headerName: 'Book Desc', field: 'bookDesc' }
  ];

  constructor(private bookMgrService: BookManagerDataService) {}

  ngOnInit() {
    this.bookMgrService.fetchBookData().subscribe((response) => {
      this.rowData = response.content;
    });
  }
}
