import { Component , OnInit} from '@angular/core';
import { BookManagerDataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  rowData: any[] = [];

  columnDefs = [
    { headerName: 'User Name', field: 'userName' },
    { headerName: 'User Role', field: 'userRole' }
  ];

  constructor(private bookMgrService: BookManagerDataService) {}

  ngOnInit() {
    this.bookMgrService.fetchUsers().subscribe((response) => {
      this.rowData = response.content;
    });
  }
}
